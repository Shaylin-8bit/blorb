import { Client, Intents } from 'discord.js';
import { parser } from './parser.js';
import { log } from './log.js';
import { getGlobals } from './utility/getGlobals.js';
import { get_globals } from './globals/globals.js';

process.on('unhandledRejection', (err) => {
  console.log(err);
})

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

client.globals = getGlobals();
client.globals2 = get_globals();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  log(null, client, 'boot');
});

client.on('messageCreate', msg => {
  if (msg.content.substring(0, 2) === 'b!') {
    parser(msg, client);
  }
});

client.on('messageDelete', (msg) => {
  log(msg, client, 'msgDel');
});

//client.login(process.env.BOT_TOKEN);