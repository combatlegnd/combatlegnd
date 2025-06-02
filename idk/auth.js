import config from '../config.js';

// Admin verification
export function isAdmin(member) {
  return member.roles.cache.has(config.adminRoleId);
}

// Whitelist verification
export async function isWhitelisted(userId, db) {
  const user = await db.collection(config.mongoDB.collections.users)
    .findOne({ discordId: userId });
  return !!user;
}

// Key validation
export async function validateKey(key, db) {
  return await db.collection(config.mongoDB.collections.keys)
    .findOne({ key, used: false });
}