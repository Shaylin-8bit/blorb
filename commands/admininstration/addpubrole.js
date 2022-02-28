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
  
  const categoryName = args[1].toLowerCase();
  let category = globals.roles.public[categoryName];
  const role = args[2];
  let roles = [];

  for (let cat in globals.roles.public) {
    roles = roles.concat(globals.roles.public[cat]);
  }

  if (roles.includes(role)) {
    msg.channel.send({content: `${role} already exists in public roles!`});
    return;
  }

  if (category) {
    category.push(role);
  } else {
    globals.roles.public[categoryName] = [role];
  }
  
  msg.channel.send({content: `Created ${role} under ${categoryName}.`});
}

const addpubrole = {
  name: name,
  type: type,
  info: info,
  run: run,
  cache: cache,
}

export { addpubrole };