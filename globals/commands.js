import { help } from '../commands/public/help.js';
import { ping } from '../commands/public/ping.js';
import { role } from '../commands/public/role.js';
import { perms } from '../commands/public/perms.js';
import { crown } from '../commands/politics/crown.js';
import { jarl } from '../commands/politics/jarl.js';
import { hird } from '../commands/politics/hird.js';
import { chieftan } from '../commands/politics/chieftan.js';

const commands = {
  'help': help,
  'ping': ping,
  'role': role,
  'perms': perms,
  'crown': crown,
  'jarl': jarl,
  'hird': hird,
  'chieftan': chieftan,
}

export { commands };