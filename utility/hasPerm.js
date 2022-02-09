import { permissions } from '../globals/permissions.js';

export function hasPerm (member) {
  let result = [];
  member.roles.cache.forEach(
    (role) => {
      if (permissions[role.name]) {
        permissions[role.name].forEach(
          command => 
            result.push(command)
        )
      }
    }
  );
  return [... new Set(result)];
}