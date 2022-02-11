const type = 'public';
const name = 'ping';
const info = 'Get bot latancy';

async function run (msg) {
  const response = await msg.channel.send('Pinging!');
  response.edit(
    `Pong! I took ${
      response.createdTimestamp - msg.createdTimestamp
    }ms to respond 🏓`
  );
}

const ping = {
  run: run,
  name: name,
  info: info,
  type: type,
}

export {ping};