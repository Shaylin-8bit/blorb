import { readdirSync } from 'fs';
import { readFileSync } from 'fs';

const getGlobals = () => {
  const result = {};
  const globalDir = './globals';
  const fileNames = readdirSync(globalDir).filter(
    (name) => {
      return name.slice(-5) === '.json';
    }
  );
  for (let fileName of fileNames) {
    const globalName = fileName.slice(0, -5);
    const rawGlobal = readFileSync(`${globalDir}/${fileName}`);
    const global = JSON.parse(rawGlobal);
    result[globalName] = global;
  }
  return result;
}

export { getGlobals };