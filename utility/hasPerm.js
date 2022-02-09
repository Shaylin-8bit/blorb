import { permissions } from '../globals/permissions.js';

export function hasPerm (member, perm) {
  let result = false;
  member.roles.cache.forEach(
    (role) => {
      if (permissions[role.name]) {
        if (permissions[role.name].includes(perm)) {
          result = true;
        }
      }
    }
  );
  return result;
}