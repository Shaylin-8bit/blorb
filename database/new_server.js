import { client } from './client.js';

const seed = async (id) => {
  let server_table = await client.query("SELECT * FROM pg_catalog.pg_tables WHERE tablename = 'servers';");
  server_table = server_table.rows;
  if (!server_table) {
    server_table = await client.query("CREATE TABLE servers (id TEXT, globals TEXT);");
  }

  let server = await client.query(`SELECT * FROM servers WHERE id = '${id}'`);
  if (server.rows.length) {
    console.log('server already exists');
  } else {
    await client.query(`INSERT INTO servers (id, globals) VALUES (${id}, 'test_text');`);
  }
  client.end();
} 

const new_server = (id) => {
  client.connect()
  .then(() => seed(5))
  .catch(e => console.log);
}


export { new_server };