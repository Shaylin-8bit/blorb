const name = 'rempubrole';
const type = 'admin';
const cache = true;
const info = 'Remove a role from public roles. `category name`';

const run = (msg, client, globals) => {
  const args = msg.content.split(' ').filter(
    (arg) => arg !== ''
  );

  if (args.length < 3) {
    msg.channel.send({content: 'Missing arguments!'});
    return;
  }
  
  const category = globals.roles.public[args[1].toLowerCase()];
  const role = args[2];

  if (category) {
    if (category.includes(role)) {
      category.splice(category.findIndex(
        (r) => r === role
      ), 1);
      msg.channel.send({content: `Deleted ${role} from ${args[1].toLowerCase()}`});

      if (!category.length) {
        delete globals.roles.public[args[1].toLowerCase()];
      }
      
    } else {
      msg.channel.send({content: `${role} does not exist in ${args[1].toLowerCase()}`});
    } 
  } else {
    msg.channel.send({content: `${category} category does not exist!`});
  }
}


const rempubrole = {
  name: name,
  type: type,
  info: info,
  run: run,
  cache: cache,
};

export { rempubrole };