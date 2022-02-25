const get_globals = async (client, id) => {
  const globals = await client.query(`SELECT globals FROM servers WHERE id = '${id}';`);
  return globals.rows[0];
}

export { get_globals };