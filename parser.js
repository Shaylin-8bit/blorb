import { getCmds } from './globals/commands.js';
import { hasPerm } from './utility/hasPerm.js';

const attemptRun = (msg, client, command) => {
  if (hasPerm(msg.member, command.name)) {
    command.run(msg, client);
  } else {
    msg.channel.send('Missing permissions!');
  }
}

export async function parser(msg, client) {
  const commands = await getCmds();
  const commandName = msg.content.split(' ')[0].substring(2);
  if (commands[commandName]) {
    attemptRun(msg, client, commands[commandName]);
  } else {
    msg.channel.send(`${commandName} is not a valid command!`);
  }
}