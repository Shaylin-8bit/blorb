import { getUtil } from '../../utility/getUtil.js';

const type = 'politics';
const name = 'hird';
const info = 'Used by the king to appoint his Hird';

async function run(msg, client) {
  const utility = await getUtil();
  const user = await utility.getTarg(msg);

  if (!user) {
    msg.channel.send({content: 'Failed to get user'});
    return;
  } 

  const members = await msg.guild.members.fetch();
  const role = msg.guild.roles.cache.find(role => role.name === 'Hird');
  
  await utility.takeRole(msg, ['Hird']);
  
  user.roles.add(role);
  msg.channel.send({content: `${user.user.username} has been appointed Hird!`});
}

const hird = {
  run: run,
  name: name,
  info: info,
  type: type,
};

export {hird};