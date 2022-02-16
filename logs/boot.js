const boot = (ctx, channelNames, client) => {
  client.channels.cache.forEach(
    (channel) => {
      if (channelNames.includes(channel.name)) {
        channel.send('Bot restarted...');
      }
    }
  );
}

export { boot };