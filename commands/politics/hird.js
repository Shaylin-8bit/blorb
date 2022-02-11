import { utility } from '../../globals/utility.js';

const type = 'politics';
const name = 'hird';
const info = 'Used by the king to appoint his Hird';

async function run(msg, client) {
  const user = await utility.getTarg(msg);

  if (!user) {
    msg.channel.send('Failed to get user');
    return;
  } 

  const members = await msg.guild.members.fetch();
  const role = msg.guild.roles.cache.find(role => role.name === 'Hird');
  
  await utility.takeRole(msg, ['Hird']);
  
  user.roles.add(role);
  msg.channel.send(`${user.user.username} has been appointed Hird!`);
}

const hird = {
  run: run,
  name: name,
  info: info,
  type: type,
};

export {hird};