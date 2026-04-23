const mysql = require('mysql2/promise');

let pool = null;

function createDbConnection() {
  if (!pool) {
    pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '12345',
      database: 'cs208demo',
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
