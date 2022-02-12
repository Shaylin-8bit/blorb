/*import { getTarg } from '../utility/getTarg.js';
import { hasPerm } from '../utility/hasPerm.js';
import { hasRank } from '../utility/hasRank.js';
import { takeRole } from '../utility/takeRole.js';

const utility = {
  'getTarg': getTarg,
  'hasPerm': hasPerm,
  'hasRank': hasRank,
  'takeRole': takeRole,
};

export { utility };*/

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