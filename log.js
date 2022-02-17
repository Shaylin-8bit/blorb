import { getLogs } from './utility/getLogs.js';
import { findLogChan } from './utility/findLogChan.js';

export const log = async (ctx, client, type) => {
  const logs = await getLogs();
  const channels = findLogChan(client, type);
  logs[type](ctx, channels, client);
}