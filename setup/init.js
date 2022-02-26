const init = async (msg, client) => {
  const def = {
    channels: {
      
    },

    permissions: {
      
    },

    roles: {
      
    }
  }
  
  client.globals.new_server(msg.guild.id, def);
}

export { init };