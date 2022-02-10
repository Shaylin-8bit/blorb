import { hasRank } from './hasRank.js';

const takeRole = async (msg, roleNames) => {
  const members = await msg.guild.members.fetch();
  
  members.forEach(
    (member) => {
      roleNames.forEach(
        (roleName) => {
          const role = msg.guild.roles.cache.find(role => role.name === roleName);
          if (hasRank(member, [roleName])) {
        member.roles.remove(role);
          }
        }
      )
    }
  );
}

export { takeRole };