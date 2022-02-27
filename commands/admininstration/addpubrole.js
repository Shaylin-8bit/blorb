const name = 'addpubrole';
const type = 'admin';
const cache = true;
const info = 'Add a role to public roles. `category name`';

const run = (msg, client, globals) => {
  const args = msg.content.split(' ').filter(
    (arg) => arg !== ''
  );

  if (args.length < 3) {
    msg.channel.send({content: 'Missing arguments!'});
    return;
  }
  
  const category = args[1].toLowerCase();
  const role = args[2];

  if (globals.roles.public[category]) {
    globals.roles.public[category].push(args[2]);
  } else {
    globals.roles.public[category] = [role];
  }
  
  msg.channel.send({content: `Created ${role} under ${category}.`});
}

const addpubrole = {
  name: name,
  type: type,
  info: info,
  run: run,
  cache: cache,
}

export { addpubrole };