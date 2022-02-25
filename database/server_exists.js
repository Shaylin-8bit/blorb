const server_exists = async (client, id) => {
  let server = await client.query(`SELECT * FROM servers WHERE id = '${id}';`);
  return server.rows.length ? true : false;
}

export { server_exists };