export function parser(msg, client) {
  switch (msg.content.substring(2)) {
    case 'help':
      msg.channel.send('helping');
      break;
    
    case 'role':
      msg.channel.send('roling');
      break;
    
    case 'ping':
      msg.channel.send('pinging');
      break;

    default:
      msg.channel.send('not a command');
  }
}