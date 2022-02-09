import { commands } from '../commands.js';

const name = 'help'
const info = 'Displays commands info';

const run = (msg) => {
  let reply = '**Commands**\n```\n';
  for (let x in commands) {
    reply += `${commands[x].name}: ${commands[x].info}\n`;
  }
  reply += '```';

  msg.channel.send(reply);
}

const help = {
  run: run,
  name: name,
  info: info,
}

export {help};