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

const setRole(msg, lst, roleName) {
  if (!hasRank(msg.member, [roleName])) {
    console.log('here');
    var role = msg.guild.roles.cache.find(role => role.name === roleName);
    msg.member.roles.add(role);

    for (let x in publicRoles[lst]) {
      if (hasRank(msg.member, [publicRoles[lst][x]])) {
        var role = msg.guild.roles.cache.find(role => role.name === roleName);
        msg.member.roles.remove(role);
      }
    }
  } else {
    console.log('already has role');
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
      console.log(att);
      break;
    }
  }

  /*if (hasRank(msg.member, [roleName])) {
    msg.channel.send('Removing');
    var role = msg.guild.roles.cache.find(role => role.name === roleName);
    msg.member.roles.remove(role);
  } else {
    msg.channel.send('Adding');
    var role = msg.guild.roles.cache.find(role => role.name === roleName);
    msg.member.roles.add(role);
  }*/
}

const role = {
  run: run,
  name: name,
}

export { role };