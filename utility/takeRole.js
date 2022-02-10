import { hasRank } from './hasRank.js';

const takeRole = async (msg, roleName) => {
  const members = await msg.guild.members.fetch();
  const role = msg.guild.roles.cache.find(role => role.name === roleName);
  members.forEach(
    (member) => {
      if (hasRank(member, [roleName])) {
        member.roles.remove(role);
      }
    }
  );
}

export { takeRole };