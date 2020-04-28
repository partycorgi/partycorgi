const Config = require('../utils/config');

exports.run = (member) => {

   // Send the message to a designated channel on a server:
   const channel = member.guild.channels.get(Config.getChannel("joins"));

   // Do nothing if the channel wasn't found on this server
   if (!channel) return;

   // Send the message, mentioning the member
   channel.send(`Welcome to the server, ${member}`);
    
};