import { Client, Intents } from 'discord.js';
import { parser } from './parser.js';
import { log } from './log.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  log(null, client, 'boot');
});

client.on('messageCreate', msg => {
  if (msg.content.substring(0, 2) === 'b!') {
    parser(msg, client);
  }
});

client.login(process.env.BOT_TOKEN);