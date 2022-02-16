const msgDel = (ctx, channelNames) => {
  const reply = `${ctx.author}'s message was deleted from ${ctx.channel}:\n${ctx.content}`;
  
  ctx.guild.channels.cache.forEach(
    (channel) => {
      if (channelNames.includes(channel.name)) {
        channel.send(reply);
      }
    }
  )
} 

export { msgDel };