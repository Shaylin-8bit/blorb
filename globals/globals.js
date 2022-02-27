import { getDB } from '../database/database.js';

class Globals {
  async init() {
    this.database = await getDB();
    this.vals = null;
    
    this.pull = async (id) => {
      
      const globals = await this.database.get_globals(id);
      if (!globals) {return null};
      this.vals = JSON.parse(globals.globals);
      return globals.globals;
    };
    
    this.cache = async (id) => {
      await this.database.set_globals(id, JSON.stringify(this.vals));
    }

    this.server = async(id) => this.database.server_exists(id);

    this.new_server = async (id, globals) => this.database.new_server(id, JSON.stringify(globals));
  }
}

const get_globals = async () => {
  const globals = new Globals();
  await globals.init();
  return globals;
}

export { get_globals };