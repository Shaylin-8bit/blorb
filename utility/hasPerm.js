export function hasPerm (client, member, perm) {
  console.log(client.globals.vals);
  const permissions = client.globals.vals.permissions;
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