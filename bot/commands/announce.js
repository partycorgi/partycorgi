const Auth = require('../utils/auth')

exports.run = async (message, args) => {
   
   if (Auth.isAdmin(message.member)) {
      
      if(!args || args.length < 1) 
         return message.reply("Must provide the text for the announcement after the command.");

      const announcement = args.join(' ');

      await message.channel.send(announcement);
      await message.delete();
   } else {
      message.reply('You must be an admin in order to run this command.');
   }
    
};