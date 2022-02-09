import { help } from './public/help.js';
import { ping } from './public/ping.js';
import { role } from './public/role.js';

const commands = {
  'help': help,
  'ping': ping,
  'role': role,
}

export { commands };