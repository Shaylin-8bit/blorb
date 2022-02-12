import { getCmds } from '../../globals/commands.js';

const type = 'public';
const name = 'help'
const info = 'Displays commands info';

const get_array = (cmds) => {
  let arr = [];
  for (let x in cmds) {
    arr.push(cmds[x]);
  }
  arr.sort((a, b) => {
    return (a.type<b.type)? 1 : -1;
  })
  return arr;
}

const run = async (msg) => {
  const commands = await getCmds();
  const arr = get_array(commands);
  let type = arr[0].type;
  let reply = `**${type[0].toUpperCase() + type.substring(1)}**\n\`\`\`\n`;
  for (let cmd of arr) {
    if (cmd.type !== type) {
      type = cmd.type;
      reply += `\`\`\`\n**${type[0].toUpperCase() + type.substring(1)}**\n\`\`\`\n`;
    }
    reply += `${cmd.name}: ${cmd.info}\n`;
  }
  reply += '```';
  

  msg.channel.send(reply);
}

const help = {
  run: run,
  name: name,
  info: info,
  type: type,
}

export {help};