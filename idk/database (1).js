const { MongoClient } = require('mongodb');
const config = require('../config');

let db;

async function connectDB() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  db = client.db(config.mongoDB.dbName);
  console.log('✅ MongoDB connected');
  return db;
}

async function getCollection(name) {
  if (!db) await connectDB();
  return db.collection(name);
}

module.exports = {
  connectDB,
  getCollection,
  db: () => db
};