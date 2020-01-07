require('dotenv').config()
const Discord = require('discord.js')

// create a client
const client = Discord.Client()

// need to listen for the ready event
client.on('ready', () => {
  console.log('client is ready')
});

// create a filter for "okay" reactions

const okayReactionFilter = reaction => reaction.emoji.name === '👌'

client.on('message', async message => {
  const collectedReactions = await message.awaitReactions(okayReactionFilter);
  // for each reaction, get the users.
  //There is no api for removing all instances of a reaction. 
  // instead, need to remove each user from a specific reaction. 
  for (const reaction of collectedReactions) {
    for (const user of reaction.users.values()) {

      try {
        await reaction.users.remove(user);
      } catch (error) {
        console.error(
          `there was an error removing the "okay-hand" reaction for ${user.username} (userId: ${user.id}) on ${message.url} `,
          error
        )
        continue
      }
      try {
        const openMessageChannel = await user.createDM();
        await openMessageChannel.sendMessage(
          `Hi, we've removed your reaction using the "okay hand" emoji. Unfortunately, that symbol has been co-opted by white supremacist groups. To help support a more inclusive community, we've opted to ban the symbol from our community, and ask that you refrain from using it in the future. Feel free to reach out to a mod if you'd like to read more about the symbol and its recent roots in white supremacy.`
        )
      } catch (error) {
          console.log(`there was an error DM'ing ${user.username} (userId: ${user.id}) regarding the removal of their okay-hand emoji on ${message.url}`)
          continue
      }
    }
  }
});

client.login(process.env.DISCORD_APP_TOKEN);
