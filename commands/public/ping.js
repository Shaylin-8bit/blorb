const type = 'public';
const name = 'ping';
const info = 'Get bot latancy';
const cache = false;

async function run (msg) {
  const response = await msg.channel.send({content: 'Pinging!'});
  response.edit(
    `Pong! I took ${
      response.createdTimestamp - msg.createdTimestamp
    }ms to respond 🏓`
  );
}

const ping = {
  name: name,
  type: type,
  info: info,
  run: run,
  cache: cache,
}

export {ping};