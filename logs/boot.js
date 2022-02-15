const boot = (ctx, client) => {
  const channelName = 'bot-logs';
  client.channels.cache.forEach(
    (channel) => {
      if (channel.name === channelName) {
        channel.send('Bot restarted...');
      }
    }
  );
}

export { boot };