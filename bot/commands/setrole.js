const Auth = require('../utils/auth')
const Config = require('../utils/config')

exports.run = (message, args) => {
   
   if (Auth.isOwner(message.member)) {
        if(!args || args.length < 1) return

        let roleType = args[0].toLowerCase().trim()

        message.mentions ? message.mentions.roles.map( mention => {
            Config.setRole(roleType, mention.id)
        }) : message.reply("You need to tag a role")

        message.reply("Config updated")
      
   } else {
      message.reply('You must be the guild owner in order to run this command.');
   }
    
};