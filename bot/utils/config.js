require('dotenv').config();
const DB = require('./db')

class Config {

  constructor() {

    this.config = {}
    this.configRef = null
    this.getConfig()

  } 

  initConfig() {
    this.setCommandPrefix(process.env.CMD_PREFIX)
    this.reload()
    console.info("Set the other configuration options via bot commands in the Discord server. Bot will not function until they are set.")
  }

  async resetConfig() {
    await DB.deleteData('config')
    this.initConfig()
  }

  reload() {
    this.getConfig()
  }

  async saveConfig() {
    await DB.writeData('config', this.config)
  }

  getBotToken() {
   return process.env.DISCORD_BOT_TOKEN
  }

  getServerPort() {
    return process.env.WEB_SERVER_PORT || 3000
  }

  getApiRoutePrefix() {
    let routePrefix = process.env.API_ROUTE_PREFIX.startsWith('/') 
      ? process.env.API_ROUTE_PREFIX.slice(1)
      : process.env.API_ROUTE_PREFIX;
    return routePrefix || 'codecareer'
  }

  getRef() {
    return this.configRef
  }

  async getConfig() {
    this.configRef = await DB.startListening('config')
    let data = await this.configRef.once('value')

    if (data.val() === null) {
      console.log("Initial loading of data from Firebase")
      this.initConfig()
    } else {
      this.config = data.val()
      this.saveConfig()
    }
    
  }

  getCommandPrefix() {
    return this.config.cmdPrefix
    // let data = await this.configRef.once('value')
    // return data.val().cmdPrefix
  }

  getChannel(name) {
    return this.config.channels[name];
    // let data = await this.configRef.once('value')
    // return data.val().channels[name]
  }

  getRole(roleType) {
    return this.config.roles[roleType];
    // let data = await this.configRef.once('value')
    // return data.val().roles[roleType]
  }

  // Setters

  async setCommandPrefix(prefix) {
    //this.config.commandPrefix = prefix;
    //this.saveConfig();
    await DB.writeData('config/cmdPrefix', prefix)
    this.reload()
  }

  async setChannel(channel_type, id) {
    // this.config.channels[channel_type] = id;
    // this.saveConfig();
    await DB.writeData(`config/channels/${channel_type}`, id)
    this.reload()
  }

  async setRole(role_type, id) {
    // this.config.roles[role_type] = id;
    // this.saveConfig();
    await DB.writeData(`config/roles/${role_type}`, id)
    this.reload()
  }
}

module.exports = new Config();
