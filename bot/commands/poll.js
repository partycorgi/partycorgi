const { auth } = require('../utils');

exports.run = async (message, args) => {
   
   if (auth.isAdmin(message.member)) {

      if(!args || args.length < 1) 
         return message.reply("Please provide description of poll after command name.");

      const question = args.join(' ')

      const msg = await message.channel.send(`Hey everyone, ${message.author} have started a poll.\n\`\`\`${question}\`\`\``);
      await msg.react("✅");
      await msg.react("❌");
      await message.delete();

   } else {
      await message.reply('You must be an admin in order to run this command.');
   }
    
};