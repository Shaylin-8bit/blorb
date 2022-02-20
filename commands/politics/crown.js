import { getUtil } from '../../utility/getUtil.js';

const type = 'politics';
const name = 'crown';
const info = 'Used to crown a new king or queen';

async function run(msg, client) {
  const utility = await getUtil();
  const user = await utility.getTarg(msg);

  if (!user) {
    msg.channel.send({content: 'Failed to get user'});
    return;
  } 

  const members = await msg.guild.members.fetch();
  const role = msg.guild.roles.cache.find(role => role.name === 'King');
  
  await utility.takeRole(msg, client.globals.roles.political);
  
  user.roles.add(role);
  msg.channel.send({content: `${user.user.username} has been crowned King!`});
}

const crown = {
  run: run,
  name: name,
  info: info,
  type: type,
};

export {crown};