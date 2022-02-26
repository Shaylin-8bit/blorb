import { readdirSync } from 'fs';

const getUtil = async () => {
  const result = {};
  const utilDir = './utility';
  const fileNames = readdirSync(utilDir).filter(
    (name) => {
      return name.slice(-3) === '.js';
    }
  );
  for (let fileName of fileNames) {
    const utilName = fileName.slice(0, -3);
    const util = await import(`./${fileName}`);
    result[utilName] = util[utilName];
  }
  return result;
}

export { getUtil };