import { getUtil } from '../../utility/getUtil.js';

const type = 'public';
const name = 'role';
const info = 'Toggle roles by passing one as an arg';

const setRole = async (msg, lst, roleName, roles) => {
  const utility = await getUtil();
  if (lst !== 'utility') {
    msg.channel.send({content: `Setting your ${lst} to ${roleName}!`})
    
    let role = msg.guild.roles.cache.find(role => role.name === roleName);
    msg.member.roles.add(role);

    for (let x of roles.public[lst]) {
      if (x !== roleName && utility.hasRank(msg.member, [x])) {
        role = msg.guild.roles.cache.find(role => role.name === x);
        msg.member.roles.remove(role);
      }
    }

  } else {
    if (!utility.hasRank(msg.member, [roleName])) {
      msg.channel.send({content: `Adding ${roleName}!`})
      const role = msg.guild.roles.cache.find(role => role.name === roleName);
      msg.member.roles.add(role);
    } else {
      msg.channel.send({content: `Removing ${roleName}!`});
      const role = msg.guild.roles.cache.find(role => role.name === roleName);
      msg.member.roles.remove(role);
    }
  
  }
}

const run = (msg, client) => {
  const roles = client.globals.roles;
  const roleName = msg.content.split(' ')[1];
  if (!roleName) {
    msg.channel.send({content: 'Buddy? You forgot to mention a role...'});
    return;
  } 

  for (let att in roles.public) {
    if (roles.public[att].includes(roleName)) {
      setRole(msg, att, roleName, roles);
      return;
    }
  }

  msg.channel.send({content: `"${roleName}" is either not a role or has restricted access... Perhaps check spelling and capitilization?`});
}

const role = {
  run: run,
  name: name,
  info: info,
  type: type,
}

export { role };