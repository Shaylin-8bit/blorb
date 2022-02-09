const name = 'help'

const run = (msg) => {
  const reply = '**Public**\n```b!help: displays this message\nb!ping: get bot latency```';
  msg.channel.send(reply);
}

const help = {
  run: run,
  name: name,
}

export {help};