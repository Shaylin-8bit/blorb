import pg from 'pg'
import { check } from './check.js';
import { new_server } from './new_server.js';
import { get_globals } from './get_globals.js';
import { set_globals } from './set_globals.js';
import { server_exists } from './server_exists.js';

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.on('error', err => {
  console.error('Database error!', err.stack)
})

const getDB = async () => {
  await client.connect();
  await check(client);
  
  return {
    client: client,
    check: async (id) => await check(client, id),
    new_server: async (id, globals) => await new_server(client, id, globals),
    set_globals: async (id, globals) => await set_globals(client, id, globals),
    get_globals: async (id) => await get_globals(client, id),
    server_exists: async (id) => await server_exists(client, id),
  }
}

export {getDB};