import client from 'pg';

const dbclient = new client.Client({
  connectionString : process.env.POSTGRES,
  ssl: {
    rejectUnauthorized: false
  }
})

export { dbclient };