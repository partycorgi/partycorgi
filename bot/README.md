# PartyCorgi.com Discord Bot
> Forked from CodeCareer's open-source [Discord bot](https://github.com/GitCodeCareer/discord-bot)

## Get Started
Getting started with your first pull request (PR) is easy! Just follow these steps...

1. Fork the repository to your own Github account.
2. Clone the forked repository to a directory on your computer.
3. Run `npm install` from within the directory. If you prefer [Yarn](https://yarnpkg.com/en/), feel free to use that instead.
4. Create a new development bot at https://discordapp.com/developers/applications/. Be sure to also create a bot user in order to interact with it.
5. Create a new project at https://console.firebase.google.com/. Go to **Settings** then **Add an application** and under **Firebase SDK snippet**, choose **CDN**. Copy/Paste correct values in `.env`
6. Duplicate the `.env.example` file and rename it to `.env` and fill in the appropriate values from the Discord Developer portal and from Firebase Console
7. Create a new javascript file in the commands folder that is named after the command you want to add. If you want to add a new event instead, make the event in `index.js`.
8. To test the bot, run `node index.js`
9. Make sure to debug the new command and test it a lot. When you are ready to submit the PR, head back to this page and click `New pull request`.
10. Wait patiently for an admin to look it over and if everything checks out, it will be merged.
