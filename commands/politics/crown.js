import { hasRank } from '../../utility/hasRank.js';

const name = 'crown';
const info = 'Used to crown a new king or queen';

async function run(msg, client) {
  const userId = msg.content.split(' ')[1];
  const members = await msg.guild.members.fetch();
  const user = members.get(userId) || msg.mentions.first();

  const role = msg.guild.roles.cache.find(role => role.name === 'King');

  if (!user) {
    msg.channel.send('Failed to get user');
    return;
  } 

  members.forEach(
    (member) => {
      if (hasRank(member, ['King'])) {
        member.roles.remove(role);
      }
    }
  );

  user.roles.add(role);
  msg.channel.send(`${user.user.username} has been crowned King!`);
}

const crown = {
  run: run,
  name: name,
  info: info,
};

export {crown};