export async function ping(msg) {
  const response = await msg.channel.send('Pinging!');
  response.edit(
    `Pong! I took ${
      response.createdTimestamp - msg.createdTimestamp
    }ms to respond 🏓`
  );
}