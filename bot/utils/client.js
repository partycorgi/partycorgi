const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const Config = require('./config');

class BotClient {
  constructor() {
    this.client = new Discord.Client();

    fs.readdir(path.join(__dirname, '..', 'events'), (err, files) => {
      if (err) throw err;
      files.forEach(file => {
        let eventName = file.split('.')[0];
        let eventFile = require(`../events/${file}`);
        this.client.on(eventName, object => eventFile.run(object));
      });
    });
  }

  getClient() {
    return this.client;
  }

  login() {
    this.client
      .login(Config.getBotToken())
        .then(function(token) {
          console.log([
            `Login Successful`.green, 
            `: Bot is now connected.`
          ].join(''))
        })
        .catch(function(err) {
          console.log([
            "Login failed".red,
            "\n❌ : There were some problems during logging to discord.\n",
            `${err}`.red
          ].join(''));
        });
  }
}

module.exports = new BotClient();
