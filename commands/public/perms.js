const name = 'perms';
const type = 'public';
const info = 'Get a list of your permissions';
const cache = false;

const run = (msg, client, globals) => {
  const permissions = globals.permissions;
  let result = '';
  msg.member.roles.cache.forEach(
    (role) => {
      if (permissions[role.name]) {
        permissions[role.name].forEach(
          (cmd) => {
            result += `${cmd}\n`;
          }
        );
      }
    }
  );
  const ends = ['**Permissions**```\n', '```'];
  msg.channel.send({content: result ? ends.join(result) : 'Your permissions have not been set up.'});
}

const perms = {
  name: name,
  type: type,
  info: info,
  run: run,
  cache: cache,
};

export { perms };