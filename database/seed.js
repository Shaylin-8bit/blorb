import {client} from './client.js';
import {tables} from './tables.js';

const build = async () => {
  for (const table_name in tables) {
    const sql = `CREATE TABLE ${table_name} (
      ${tables[table_name].columns.join(', ')}
    );`;
    try {
      await client.query(sql);
    } catch (err) {
      console.error(err);
      return;
    }
    
  }
};

const clear = async () => {
  const get_tables = `SELECT table_name FROM information_schema.tables WHERE table_schema='public';`
  let names;
  try {
    names = await client.query(get_tables);
  } catch (err) {
    console.error(err);
    return;
  }
  
  for (const name of names.rows) {
    const sql = `
      DROP TABLE IF EXISTS ${name.table_name};
    `;
    try {
      await client.query(sql);
    } catch (err) {
      console.error(err);
      return;
    }
  }
};

const seed = () => {
  client.connect()
  .then(clear)
  .then(build); 
}

export { seed };