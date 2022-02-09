import { ping } from './commands/public/ping.js';

export function parser(msg, client) {
  switch (msg.content.substring(2)) {
    case 'help':
      msg.channel.send('helping');
      break;
    
    case 'role':
      msg.channel.send('roling');
      break;
    
    case 'ping':
      ping(msg);
      break;

    default:
      msg.channel.send('not a command');
  }
}