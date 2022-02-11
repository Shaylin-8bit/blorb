import { utility } from '../../globals/utility.js';

const type = 'politics';
const name = 'chieftan';
const info = 'Used by the king to apoint his Chieftan';

async function run(msg, client) {
  const user = await utility.getTarg(msg);

  if (!user) {
    msg.channel.send('Failed to get user');
    return;
  } 

  const members = await msg.guild.members.fetch();
  const role = msg.guild.roles.cache.find(role => role.name === 'Chieftan');
  
  await utility.takeRole(msg, ['Chieftan']);
  
  user.roles.add(role);
  msg.channel.send(`${user.user.username} has been appointed Chieftan!`);
}

const chieftan = {
  run: run,
  name: name,
  info: info,
  type: type,
};

export {chieftan};