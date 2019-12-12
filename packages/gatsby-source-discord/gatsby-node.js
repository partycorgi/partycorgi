require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const Discorgi = require('discord.js');

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const client = new Discorgi.Client();

  console.log('yo');
  await client
    .login(process.env.DISCORD_BOT_TOKEN)
    .catch(err => console.error(err));

  const guild = client.guilds.find(guild => guild.id === '601625579166367755');
  const roles = guild.roles;
  const streamerRole = roles.find(role => role.name === 'Streamer');

  const { members } = await guild.fetchMembers();
  const streamers = members.filter(member =>
    member._roles.includes(streamerRole.id),
  );

  streamers.forEach(streamer => {
    console.log({
      nickname: streamer.nickname,
      username: streamer.user.username,
    });
    actions.createNode({
      username: streamer.nickname ? streamer.nickname : streamer.user.username,
      avatarUrl: streamer.user.displayAvatarURL,
      id: createNodeId(`DiscordStreamer-${streamer.user.id}`),
      discordID: streamer.user.id,
      internal: {
        type: 'DiscordStreamer',
        contentDigest: createContentDigest(streamer),
      },
    });
  });
};
