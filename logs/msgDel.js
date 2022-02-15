const msgDel = (ctx) => {
  const channelName = 'bot-logs';
  const channel = ctx.guild.channels.cache.find(
    (channel) => {
      return channel.name === channelName;
    }
  )
  const reply = `${ctx.author}'s message was deleted from ${ctx.channel}:\n${ctx.content}`;
  channel.send(reply);
} 

export { msgDel };