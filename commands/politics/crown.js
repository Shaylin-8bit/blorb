import { hasRank } from '../../utility/hasRank.js';
import { getTarg } from '../../utility/getTarg.js';

const name = 'crown';
const info = 'Used to crown a new king or queen';

async function run(msg) {
  const user = await getTarg(msg);
  const members = await msg.guild.members.fetch();

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