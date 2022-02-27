const init = async (msg, client) => {
  const def = {
    channels: {
      
    },

    permissions: {
      
    },

    roles: {
      public: {
        
      },

      private: {
        
      },

      admininstrator: {
        
      }
    }
  }
  
  client.globals.new_server(msg.guild.id, def);
}

export { init };