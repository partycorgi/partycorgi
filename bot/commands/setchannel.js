const Auth = require('../utils/auth')
const Config = require('../utils/config')

exports.run = (message, args) => {
   
   if (Auth.isOwner(message.member)) {
        if (!args || args.length < 1) return
        
        let channelType = args[0].toLowerCase().trim()

        message.mentions ? message.mentions.channels.map( mention => {
            Config.setChannel(channelType, mention.id)
        }) : message.reply("You need to tag a channel")

        message.reply("Config updated")
      
   } else {
      message.reply('You must be the guild owner in order to run this command.');
   }
    
};