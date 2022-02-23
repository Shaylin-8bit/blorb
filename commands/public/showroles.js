const name = 'showroles';
const type = 'public';
const info = 'Shows all available roles';

const run = (msg, client) => {
  const roles = client.globals.roles.public;
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

  msg.channel.send({content: reply}); 
}

const showroles = {
  name: name,
  type: type,
  info: info,
  run: run
};

export { showroles };
