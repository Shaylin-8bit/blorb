import { help } from './public/help.js';
import { ping } from './public/ping.js';

const commands = {
  'help': help,
  'ping': ping,
}

export { commands };