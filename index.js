import { Client, Intents } from 'discord.js';
import { parser } from './parser.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (msg.content.substring(0, 2) === 'b!') {
    parser(msg, client);
  }

});

client.login(process.env.BOT_TOKEN);