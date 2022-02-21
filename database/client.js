import pg from 'pg';

const client = new pg.Client({
  connectionString : process.env.POSTGRES,
  ssl: {
    rejectUnauthorized: false
  }
})

export { client };