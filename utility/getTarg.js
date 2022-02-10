const getTarg = async (msg) => {
  const userId = msg.content.split(' ')[1];
  const members = await msg.guild.members.fetch();
  const user = members.get(userId) || msg.mentions.members.first();
  return user;
}

export { getTarg };