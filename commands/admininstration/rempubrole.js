const name = 'rempubrole';
const type = 'admin';
const cache = true;
const info = 'Remove a role from public roles.';

const run = (msg, client, globals) => {
  const args = msg.content.split(' ').filter(
    (arg) => arg !== ''
  );

  if (args.length < 2) {
    msg.channel.send({content: 'Missing arguments!'});
    return;
  }

  const role = args[1];
  
  for (let category in globals.roles.public) {
    if (globals.roles.public[category].includes(role)) {
      globals.roles.public[category].splice(
        globals.roles.public[category].indexOf(
          (r) => r === role
        ),
        1
      );
      msg.channel.send({content: `Removed ${role} from ${category}`});
      if (globals.roles.public[category].length) {
        delete globals.roles.public[category];
      }
      return;
    }
  }
  msg.channel.send({content: `${role} does not exist`});
};


const rempubrole = {
  name: name,
  type: type,
  info: info,
  run: run,
  cache: cache,
};

export { rempubrole };