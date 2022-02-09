const name = 'ping';

async function run (msg) {
  const response = await msg.channel.send('Pinging!');
  response.edit(
    `Pong! I took ${
      response.createdTimestamp - msg.createdTimestamp
    }ms to respond 🏓`
  );
}

const ping = {
  name: name,
  run: run,
}

export {ping};