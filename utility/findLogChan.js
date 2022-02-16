import { channels } from '../globals/channels.js';

const findLogChan = (logName) => {
  let result = [];
  for (let channel in channels.log) {
    channels.log[channel].forEach(
      (log) => {
        if (log === logName) {
          result.push(channel);
        }
      }
    );
  }
  return result;
}

export { findLogChan };