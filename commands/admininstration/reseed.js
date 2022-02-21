import { seed } from '../../database/seed.js';

const name = 'reseed';
const info = 'Reseed main database';
const type = 'admin';

const run = async (msg) => {
  msg.channel.send({content: 'Resetting database...'});
  await seed();
  msg.channel.send({content: 'Database has been reset!'});
};

const reseed = {
  name: name,
  info: info,
  type: type,
  run: run,
};

export { reseed };