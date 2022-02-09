import { commands } from './commands/commands.js';
import { permissions } from './utility/permissions.js';

const attemptRun = (msg, client, command) => {
  const commandPerms = permissions(msg.member);
  if (commandPerms.includes(command.name)) {
    command.run(msg, client);
  } else {
    msg.channel.send('Missing permissions!');
  }
}

export function parser(msg, client) {
  const commandName = msg.content.split(' ')[0].substring(2);
  if (commands[commandName]) {
    attemptRun(msg, client, commands[commandName]);
  } else {
    msg.channel.send(`${commandName} is not a valid command!`);
  }
}