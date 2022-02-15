import { getLogs } from './utility/getLogs.js';

export const log = async (ctx, client, type) => {
  const logs = await getLogs();
  logs[type](ctx, client, type);
}