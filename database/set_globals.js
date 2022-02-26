const set_globals = async (client, id, globals) => {
  return await client.query(`
    UPDATE servers 
    SET globals = '${globals}' 
    WHERE id = '${id}';
  `);
}

export { set_globals };