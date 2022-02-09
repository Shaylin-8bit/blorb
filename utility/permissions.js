const access = {
  'Grand Overseer': [],
  'Overseer': [],
  '@everyone': ['ping', 'help', 'role'],
}

export function permissions (member) {
  let result = [];
  member.roles.cache.forEach(
    (role) => {
      if (access[role.name]) {
        access[role.name].forEach(
          command => 
            result.push(command)
        )
      }
    }
  );
  return [... new Set(result)];
}