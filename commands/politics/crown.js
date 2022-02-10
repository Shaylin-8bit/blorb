import { utility } from '../../globals/utility.js';

const name = 'crown';
const info = 'Used to crown a new king or queen';

async function run(msg) {
  const user = await utility.getTarg(msg);

  if (!user) {
    msg.channel.send('Failed to get user');
    return;
  } 

  const members = await msg.guild.members.fetch();
  const role = msg.guild.roles.cache.find(role => role.name === 'King');
  
  await utility.takeRole(msg, ['King','Jarl','Hird','Chieftan']);
  
  user.roles.add(role);
  msg.channel.send(`${user.user.username} has been crowned King!`);
}

const crown = {
  run: run,
  name: name,
  info: info,
};

export {crown};