const findLogChan = (client, logName) => {
  let result = [];
  for (let channel in client.channels.log) {
    client.channels.log[channel].forEach(
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