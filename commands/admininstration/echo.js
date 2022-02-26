const name = 'echo';
const type = 'admin';
const info = 'Echos a message with an optional channel arg';
const cache = false;

const run = (msg) => {
  const channel = msg.mentions.channels.first()
  const reply = msg.content.split(' ').slice(channel? 2 : 1).join(' ');
  if (reply) {
    if (channel) {
      channel.send({content: reply});
    } else {
      msg.channel.send({content: reply});
    }
  }
  msg.delete();
} 

const echo = {
  name: name,
  type: type,
  info: info,
  run: run,
  cache: cache,
}

export { echo };