const name = 'showroles';
const type = 'public';
const info = 'Shows all available roles';
const cache = false;

const run = (msg, client, globals) => {
  const roles = globals.roles.public;
  let reply = '';

  for (const type in roles) {
    reply += `**${
      type.split(' ').map(
        (word) => {
          return word[0].toUpperCase() + word.substring(1);
        }
      ).join(' ')
    }**\n\`\`\`\n${roles[type].join('\n')}\`\`\`\n`;
  }

  msg.channel.send({content: reply ? reply : 'No roles have been setup...'}); 
}

const showroles = {
  name: name,
  type: type,
  info: info,
  run: run,
  cache: cache,
};

export { showroles };
