const mysql = require('mysql2/promise');

let pool = null;

function createDbConnection() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '12345',
      database: process.env.DB_NAME || 'cs208demo',
      port: Number(process.env.DB_PORT) || 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  return pool;
}

async function query(sql, params = []) {
  const db = createDbConnection();
  const [rows] = await db.query(sql, params);
  return rows;
}

async function closeDbConnection() {
  if (!pool) {
    return;
  }

  try {
    await pool.end();
    console.log('Database connection closed.');
  } catch (error) {
    console.error('Error closing database connection:', error);
  } finally {
    pool = null;
  }
}

module.exports = { createDbConnection, query, closeDbConnection };
