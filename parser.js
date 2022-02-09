import { ping } from './commands/public/ping.js';
import { permissions } from './utility/permissions.js';

export function parser(msg, client) {
  const commands = permissions(msg.member);
  console.log(commands);
  switch (msg.content.substring(2)) {
    case 'help':
      msg.channel.send('helping');
      break;
    
    case 'role':
      msg.channel.send('roling');
      break;
    
    case 'ping':
      ping.run(msg);
      break;

    default:
      msg.channel.send('not a command');
  }
}