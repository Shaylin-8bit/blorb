import { getUtil } from '../../utility/getUtil.js';

const type = 'politics';
const name = 'chieftan';
const info = 'Used by the king to apoint his Chieftan';

async function run(msg, client) {
  const utility = await getUtil();
  const user = await utility.getTarg(msg);

  if (!user) {
    msg.channel.send({content: 'Failed to get user'});
    return;
  } 

  const members = await msg.guild.members.fetch();
  const role = msg.guild.roles.cache.find(role => role.name === 'Chieftan');
  
  await utility.takeRole(msg, ['Chieftan']);
  
  user.roles.add(role);
  msg.channel.send({content: `${user.user.username} has been appointed Chieftan!`});
}

const chieftan = {
  run: run,
  name: name,
  info: info,
  type: type,
};

export {chieftan};