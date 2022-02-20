import client from 'pg';

const client = new client.Client({
  connectionString : process.env.POSTGRES,
  ssl: {
    rejectUnauthorized: false
  }
})

export { client };