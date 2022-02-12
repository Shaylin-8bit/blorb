import { readdirSync } from 'fs';

const getCmds = async () => {
  const result = {};
  const cmdDir = './commands';
  const categories = readdirSync(cmdDir);
  for (let cat of categories) {
    const cmdFiles = readdirSync(`${cmdDir}/${cat}`).filter(
      (name) => {
        return name.slice(-3) === '.js';
      }
    );
    for (let cmdFile of cmdFiles) {
      const cmdName = cmdFile.slice(0, -3);
      const cmd = await import(`.${cmdDir}/${cat}/${cmdFile}`);
      result[cmdName] = cmd[cmdName];
    }
  }
  return result;
}

export { getCmds };