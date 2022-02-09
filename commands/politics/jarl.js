import { hasRank } from '../../utility/hasRank.js';

const name = 'jarl';
const info = 'Used by the king to appoint his Jarl';

async function run(msg, client) {
  const userId = msg.content.split(' ')[1];
  const members = await msg.guild.members.fetch();
  const user = members.get(userId) || msg.mentions.first();

  const role = msg.guild.roles.cache.find(role => role.name === 'Jarl');

  if (!user) {
    msg.channel.send('Failed to get user');
    return;
  } 

  members.forEach(
    (member) => {
      if (hasRank(member, ['Jarl'])) {
        member.roles.remove(role);
      }
    }
  );

  user.roles.add(role);
  msg.channel.send(`${user.user.username} has been apointed Jarl!`);
}

const jarl = {
  run: run,
  name: name,
  info: info,
};

export {jarl};