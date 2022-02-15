import { readdirSync } from 'fs';

const getLogs = async () => {
  const result = {};
  const logDir = './logs';
  const fileNames = readdirSync(logDir).filter(
    (name) => {
      return name.slice(-3) === '.js';
    }
  );
  for (let fileName of fileNames) {
    const logName = fileName.slice(0, -3);
    const log = await import(`.${logDir}/${fileName}`);
    result[logName] = log[logName];
  }
  return result;
}

export { getLogs };