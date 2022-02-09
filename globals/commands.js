import { help } from '../commands/public/help.js';
import { ping } from '../commands/public/ping.js';
import { role } from '../commands/public/role.js';

const commands = {
  'help': help,
  'ping': ping,
  'role': role,
}

export { commands };