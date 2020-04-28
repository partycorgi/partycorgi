const Auth = require('../utils/auth')
const Config = require('../utils/config')

exports.run = (message, args) => {
   
   if (Auth.isOwner(message.member)) {

      Config.resetConfig()
      message.reply("Config reset")
      
   } else {
      message.reply('You must be the guild owner in order to run this command.');
   }
    
};