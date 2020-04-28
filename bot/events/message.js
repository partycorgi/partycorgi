const Config = require('../utils/config');
const path = require('path')

exports.run = (msg) => {

   if (msg.author.bot) 
    return;

   if(msg.content.indexOf(Config.getCommandPrefix()) !== 0) 
    return;

   const args = msg.content.slice(Config.getCommandPrefix().length).trim().split(/ +/g);
   const command = args.shift().toLowerCase().replace('/', '');
   try {
     let commandFile = require(path.join(__dirname, '..', 'commands', `${command}.js`))
     commandFile.run(msg, args);
   } catch (err) {
     console.error([
       "❌ : command '" + command + "' does not exist\n",
       `${err}`.red
     ].join(''));
   }
    
};