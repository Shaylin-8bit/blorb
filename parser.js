import { ping } from './commands/public/ping.js';
import { permissions } from './utility/permissions.js';

const attemptRun = (msg, client, command) => {
  const commands = permissions(msg.member);
  if (commands.includes(command.name)) {
    msg.channel.send(`Running ${command.name}!`);
    command.run(msg, client);
  } else {
    msg.channel.send('Missing permissions!');
  }
}

export function parser(msg, client) {
  switch (msg.content.substring(2)) {
    case 'help':
      msg.channel.send('helping');
      break;
    
    case 'role':
      msg.channel.send('roling');
      break;
    
    case 'ping':
      attemptRun(msg, client, ping);
      break;

    default:
      msg.channel.send('not a command');
  }
}