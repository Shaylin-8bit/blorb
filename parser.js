import { getCmds } from './utility/getCmds.js';
import { hasPerm } from './utility/hasPerm.js';
import { init } from './setup/init.js';



const attemptRun = async (msg, client, command) => {
  if (hasPerm(client, msg.member, command.name) || msg.guild.ownerId === msg.author.id) {
    await command.run(msg, client, client.globals.vals);
    if (command.cache) {
      await client.globals.cache(msg.guild.id);
    }
  } else {
    msg.channel.send({content: 'Missing permissions!'});
  }
}



export async function parser(msg, client) {
  if (msg.content === 'b!init') {
    if (await client.globals.server(msg.guild.id)) {
      msg.channel.send({content: 'Server already initialized'});
    } else if (msg.guild.ownerId !== msg.author.id) {
      msg.channel.send({content: 'Server owner must run this command'});
    } else {
      msg.channel.send({content: 'Initializing server globals...'});
      init(msg, client);
      msg.channel.send({content: 'Server globals initialized!'});
    }
    return;
  }
  
  if (!await client.globals.server(msg.guild.id)) {
    msg.channel.send({content: "Globals non existant. Requires owner to run `b!init`."});
    return;
  }
    
  await client.globals.pull(msg.guild.id);
  const commands = await getCmds();
  const commandName = msg.content.split(' ')[0].substring(2);
  if (commands[commandName]) {
    attemptRun(msg, client, commands[commandName]);
  } else {
    msg.channel.send({content: `${commandName} is not a valid command!`});
  }
}