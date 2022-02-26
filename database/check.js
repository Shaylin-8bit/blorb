const check = async (client) => {
  let server_table = await client.query("SELECT * FROM pg_catalog.pg_tables WHERE tablename = 'servers';");
  server_table = server_table.rows;
  if (!server_table.length) {
    await client.query("CREATE TABLE servers (id TEXT, globals TEXT);");
  }
}

export { check };