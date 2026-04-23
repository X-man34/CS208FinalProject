const mysql = require('mysql2/promise');

const DEFAULT_COUNT = 1000;
const BATCH_SIZE = 100;

function buildComment(index) {
  return [
    `Seed User ${index + 1}`,
    `Seeded comment ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  ];
}

async function main() {
  const rawCount = process.argv[2];
  const count = rawCount ? Number.parseInt(rawCount, 10) : DEFAULT_COUNT;

  if (!Number.isInteger(count) || count < 1) {
    throw new Error('Usage: node scripts/seed_comments.js [positive-count]');
  }

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '12345',
    database: process.env.DB_NAME || 'cs208demo'
  });

  try {
    for (let offset = 0; offset < count; offset += BATCH_SIZE) {
      const batchCount = Math.min(BATCH_SIZE, count - offset);
      const values = [];
      const placeholders = [];

      for (let i = 0; i < batchCount; i += 1) {
        placeholders.push('(?, ?)');
        values.push(...buildComment(offset + i));
      }

      await connection.query(
        `INSERT INTO comments (display_name, body) VALUES ${placeholders.join(', ')}`,
        values
      );
    }

    console.log(`Inserted ${count} comments into cs208demo.comments`);
  } finally {
    await connection.end();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
