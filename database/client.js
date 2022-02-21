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

const foo = async () => {
  client.connect()
  .then(() => console.log("connected"))
  .catch(e => console.log)
  .finally(() => {
      client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
      client.end();
    });
  })
}

export {client};
