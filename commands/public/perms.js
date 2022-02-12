import { permissions } from '../../globals/permissions.js';

const name = 'perms';
const type = 'public';
const info = 'Get a list of your permissions';

const run = (msg) => {
  let result = '**Permissions**```\n';
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
  result += '```';
  msg.channel.send(result);
}

const perms = {
  name: name,
  type: type,
  info: info,
  run: run,
};

export { perms };