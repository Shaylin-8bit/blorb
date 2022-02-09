import { hasRank } from '../../utility/hasRank.js';

const name = 'role';
const publicRoles = [
  'Jomsviking',
  'Varangian',
  'Berserker',
  'Archer',
  'Swordsman',
  'Calvary',
  'Mage',
  'Blacksmith',
  'Fisherman',
  'Skald',
  'Farmer',
  'Woodsman',
  'Shipmaster',
  'Skald',
  'Ping',
];

const run = (msg) => {
  const roleName = msg.content.split(' ')[1];
  if (!roleName) {
    msg.channel.send('Buddy? You forgot to mention a role...');
    return;
  } 

  if (!publicRoles.includes(roleName)) {
    msg.channel.send('This role either does not exist, or has limited access.');
    return;
  }

  if (hasRank(msg.member, [roleName])) {
    msg.channel.send('Removing');
    var role = msg.guild.roles.cache.find(role => role.name === roleName);
    msg.member.roles.remove(role);
  } else {
    msg.channel.send('Adding');
    var role = msg.guild.roles.cache.find(role => role.name === roleName);
    msg.member.roles.add(role);
  }
}

const role = {
  run: run,
  name: name,
}

export { role };