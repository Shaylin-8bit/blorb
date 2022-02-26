const new_server = async (client, id, globals) => {
  let server = await client.query(`SELECT * FROM servers WHERE id = '${id}';`);
  if (server.rows.length) {
    return 1
  } else {
    await client.query(`INSERT INTO servers (id, globals) VALUES (${id}, '${globals}');`);
    return 0;
  }
}


export { new_server };