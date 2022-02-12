const name = 'echo';
const type = 'admin';
const info = 'Echos a message with an optional channel arg';

const run = (msg) => {
  const channel = msg.mentions.channels.first()
  const reply = msg.content.split(' ').slice(channel? 2 : 1).join(' ');
  if (reply) {
    if (channel) {
      channel.send(reply);
    } else {
      msg.channel.send(reply);
    }
  }
  msg.delete();
} 

const echo = {
  name: name,
  info: info,
  type: type,
  run: run,
}

export { echo };