import pg from 'pg'

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.on('error', err => {
  console.error('Database error!', err.stack)
})

export {client};