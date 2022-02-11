import { utility } from '../../globals/utility.js';

const type = 'politics';
const name = 'jarl';
const info = 'Used by the king to appoint his Jarl';

async function run(msg, client) {
  const user = await utility.getTarg(msg);

  if (!user) {
    msg.channel.send('Failed to get user');
    return;
  } 

  const members = await msg.guild.members.fetch();
  const role = msg.guild.roles.cache.find(role => role.name === 'Jarl');
  
  await utility.takeRole(msg, ['Jarl']);
  
  user.roles.add(role);
  msg.channel.send(`${user.user.username} has been appointed Jarl!`);
}

const jarl = {
  run: run,
  name: name,
  info: info,
  type: type,
};

export {jarl};