import { hasRank } from '../../utility/hasRank.js';

const name = 'role';

const publicRoles = {
  facRoles: [
    'Jomsviking',
    'Varangian',
    'Berserker',
  ],

  warRoles: [
    'Archer',
    'Swordsman',
    'Calvary',
    'Mage',
  ],

  occRoles: [
    'Blacksmith',
    'Fisherman',
    'Skald',
    'Farmer',
    'Woodsman',
    'Shipmaster',
  ],

  utiRoles: [
    'Skald',
    'Ping',
  ],
};

const setRole = (msg, lst, roleName) => {
  if (lst !== 'utiRoles') {
    msg.channel.send(`Setting your ${
      {
        'facRoles': 'faction', 'warRoles': 'warrior class', 'occRoles': 'occupation'
      }[lst]
    } to ${roleName}!`)
    
    let role = msg.guild.roles.cache.find(role => role.name === roleName);
    msg.member.roles.add(role);

    for (let x of publicRoles[lst]) {
      if (x !== roleName && hasRank(msg.member, [x])) {
        role = msg.guild.roles.cache.find(role => role.name === x);
        msg.member.roles.remove(role);
      }
    }

  } else {
    if (!hasRank(msg.member, [roleName])) {
      msg.channel.send(`Adding ${roleName}!`)
      const role = msg.guild.roles.cache.find(role => role.name === roleName);
      msg.member.roles.add(role);
    } else {
      msg.channel.send(`Removing ${roleName}!`);
      const role = msg.guild.roles.cache.find(role => role.name === roleName);
      msg.member.roles.remove(role);
    }
  
  }
}


const run = (msg) => {
  const roleName = msg.content.split(' ')[1];
  if (!roleName) {
    msg.channel.send('Buddy? You forgot to mention a role...');
    return;
  } 

  for (let att in publicRoles) {
    if (publicRoles[att].includes(roleName)) {
      setRole(msg, att, roleName);
      return;
    }
  }

  msg.channel.send(`"${roleName}" is either not a role or has restricted access... Perhaps check spelling and capitilization?`);
}

const role = {
  run: run,
  name: name,
}

export { role };