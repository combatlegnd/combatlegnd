import 'dotenv/config';
import { Client, GatewayIntentBits, Collection, REST, Routes } from 'discord.js';
import { MongoClient } from 'mongodb';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import crypto from 'crypto';
import config from './config.js';

// ESM-compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();
app.use(express.json());

// Initialize Discord Client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

// Global Variables
client.commands = new Collection();
let db;

// Generate or use existing API key
const API_KEY = process.env.API_KEY || crypto.randomBytes(32).toString('hex');

// Database Connection
async function connectDB() {
  try {
    const mongoClient = new MongoClient(process.env.MONGODB_URI, {
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000
    });
    await mongoClient.connect();
    db = mongoClient.db(config.mongoDB.dbName);
    console.log('✅ MongoDB Connected');

    // Create indexes for premium keys
    await db.collection('premiumKeys').createIndex({ key: 1 }, { unique: true });
    return db;
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1);
  }
}

// Command Loader
async function loadCommands() {
  const commandsPath = path.join(__dirname, 'commands');
  const commandFiles = fs.readdirSync(commandsPath)
    .filter(file => file.endsWith('.js'));

  const commands = [];

  for (const file of commandFiles) {
    try {
      const filePath = path.join(commandsPath, file);
      const command = await import(filePath);

      if (command.default?.data) {
        client.commands.set(command.default.data.name, command.default);
        commands.push(command.default.data.toJSON());
        console.log(`✔ Loaded command: ${command.default.data.name}`);
      }
    } catch (error) {
      console.error(`❌ Error loading command ${file}:`, error);
    }
  }
  return commands;
}

// Event Loader
async function loadEvents() {
  const eventsPath = path.join(__dirname, 'events');
  const eventFiles = fs.readdirSync(eventsPath)
    .filter(file => file.endsWith('.js'));

  for (const file of eventFiles) {
    try {
      const filePath = path.join(eventsPath, file);
      const event = await import(filePath);

      if (event.default?.name) {
        client.on(event.default.name, (...args) => 
          event.default.execute(...args, client, db)
        );
        console.log(`✔ Loaded event: ${event.default.name}`);
      }
    } catch (error) {
      console.error(`❌ Error loading event ${file}:`, error);
    }
  }
}

// Basic route to test connectivity
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Key Verification Endpoint
app.post('/api/checkKey', async (req, res) => {
  try {
    console.log('Received request with key:', req.body.key); // Debug log

    const { key, userId } = req.body;

    if (!key) {
      return res.status(400).json({ error: "Key is required" });
    }

    // Check API key in header
    const clientKey = req.headers['x-api-key'];
    if (clientKey !== API_KEY) {
      return res.status(403).json({ error: "Invalid API key" });
    }

    // Check if key exists in premiumKeys collection
    const premiumKey = await db.collection('premiumKeys').findOne({ 
      key: key,
      active: true,
      $or: [
        { expiryDate: { $exists: false } },
        { expiryDate: { $gt: new Date() } }
      ]
    });

    if (!premiumKey) {
      return res.json({ isValid: false });
    }

    // Record key usage
    await db.collection('premiumKeys').updateOne(
      { _id: premiumKey._id },
      { 
        $addToSet: { usedBy: userId || "unknown" },
        $inc: { uses: 1 },
        lastUsed: new Date()
      }
    );

    res.json({ 
      isValid: true,
      isPremium: true,
      expiry: premiumKey.expiryDate || null
    });

  } catch (error) {
    console.error('Key verification error:', error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Bot Ready Event
client.once('ready', async () => {
  console.log(`🚀 Logged in as ${client.user.tag}`);

  // Register Slash Commands
  try {
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
    const commands = await loadCommands();

    console.log('⌛ Refreshing application (/) commands...');

    await rest.put(
      Routes.applicationCommands(client.user.id),
      { body: commands }
    );

    console.log(`✅ Successfully reloaded ${commands.length} application (/) commands`);
    console.log('Available commands:', commands.map(c => c.name).join(', '));

    // Set bot presence
    client.user.setActivity('/help', { type: 'LISTENING' });
  } catch (error) {
    console.error('❌ Failed to refresh application commands:', error);
  }
});

// Error Handling
process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
});

// Main Execution
(async () => {
  try {
    console.log('⚡ Starting services...');
    await connectDB();
    await loadEvents();
    // Handle all unhandled routes
    app.use((req, res) => {
      res.status(200).send('Server is alive!');
    });
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log('🔑 Key API ready at /api/checkKey');
    });

    await client.login(process.env.DISCORD_TOKEN);
  } catch (error) {
    console.error('❌ Fatal startup error:', error);
    process.exit(1);
  }
})();