/**
 * 
 * command_name: define
 * version: 3.1.0
 * description: Provides definition for words from web.
 * npm_dependencies: { request, request-promise-native }
 * author: ap4gh(Github), debjay(on CodeCareer Discord Server)
 * license: MIT https://opensource.org/licenses/MIT
 * 
 * COMMENT GLOSSARY
 * ----------------
 *  1. TODO: To be done in future.
 *  2. NOTE: Important statement about code.
 *  3. PROC: Explains the following procedure.
 * 
 */

const request = require('request-promise-native');

const maxRelatedTopics = 4;

// run function for !define command:
exports.run = (message, args) => {
  if (args.length === 0)
    return sendMessage(message, 'Use `!define --help` to get command guide.');
  runUserCommand(message, args, args[0]); // args[0]: option name 
};

/** runUserCommand: screen command and execute handler. */
const runUserCommand = (message, args, option = '') => {
  const availableCommands = {
    '-h': showHelp,
    '--help': showHelp,
    wiki: wikipediaOpenSearch,
    default: ddgInstantAnswer
  };
  // PROC: if option does not match any, return default
  return (availableCommands[option] || availableCommands.default)(message, args);
};


/** --------------
 * OPTION HANDLERS
 * ---------------*/

/** ddgInstantAnswer: get answers from DuckDuckGo */
async function ddgInstantAnswer (message, args) {

  const searchPhrase = args.slice(0, args.length).join(' '); // search phrase
  let data; // to collect fetched data.

  try {
    data = await request({
      url: generateQueryURL(searchPhrase),
      json: true,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error(err);
    return notifyErrors(message, e);
  }

  let result = `:mag: \`${searchPhrase}\`\n`;
  const relatedTopics = data['RelatedTopics'];
  const abstractText = data['AbstractText'];
  const abstractURL = data['AbstractURL'];

  // PROC: if nothing was found:
  if (relatedTopics.length === 0) 
    result += `Cannot find information on *${searchPhrase}* :no_good: Read the command guide with \`!define --help\` to get accurate results.`;
  else if (!abstractText || !abstractURL) {
    result += `*"${searchPhrase}" may refer to following things*  :point_down:\n\n`;
    for (let topic of relatedTopics) {
      /**
       * NOTE: keeping maximum of 3 related topics to be displayed.
       * maximum related topics can be changed at the top.
       * discord do not allow a message length > 2000 chars.
       */
      if (
        topic['Text'] === undefined ||
        topic['FirstURL'] === undefined ||
        relatedTopics.indexOf(topic) >= maxRelatedTopics
      ) break;

      result += `${topic['Text']}\n${topic['FirstURL']}\n\n`;
    }
  } // if abstract data exist:
  else {
    result += '```' + abstractText + '```:link: ' + abstractURL;
  }
  return sendMessage(message, result);
};

/** wikipediaOpenSearch: get answers from Wikipedia */
async function wikipediaOpenSearch (message, args) {

  const searchPhrase = args.slice(1, args.length).join(' '); // search phrase
  let data;

  try {
    data = await request({
      url: generateQueryURL(searchPhrase, 'wiki'),
      json: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (e) {
    console.error(e);
    return notifyErrors(message, e);
  }
  
  const definitions = data[2]; // all definitions
  const links = data[3]; // all wikipedia page links
  let wikipediaPageLink = ':link: ' + links[0]; // main definition page link

  let result = definitions[0]; //  first definition
  if (!result) // PROC: if no definition was found
    result = `No information provided for *${searchPhrase}* :no_good: `;
  // More answers? collect them.
  else if (result.match(/may refer to/g)) {
    result = `:mag: **Wikipedia**: \`${searchPhrase}\`\n\n` +
      '```\n' +
      result +
      '\n\n';

    definitions.shift(); // PROC: remove useless definition at index 0
    let nonEmptyDefinitions = [];

    for (let d of definitions) 
      if (d.length > 0) 
        nonEmptyDefinitions.push(d);

    for (let i = 0; i < maxRelatedTopics; ++i) {
      if (nonEmptyDefinitions[i] == undefined) 
        break;
      result += `${i + 1}. ${nonEmptyDefinitions[i]}\n\n`; // PROC: store all non-empty defn.
    }
    result += '```';
  }
  else { // PROC: if exact meaning was obtained, send it.
    result = `:mag: ${searchPhrase}` + '```' + result + '```' + wikipediaPageLink;
  }
  return sendMessage(message, result);
};

/** showHelp: command manual. */
function showHelp (message, args) {
// TODO: Move into manuals folder
  sendMessage(
    message,
    `
    \`\`\`
NAME
  define -- provide definition for words from web.

DESCRIPTION
  !define command gets abstract information on a word from
  duckduckgo and wikipedia.

COMMANDS
  1) !define <search-text>         DuckDuckGo instant answer.
  2) !define wiki <search-text>    Wikipedia definition.
  3) !define -h[--help]            Provides help text.

EXAMPLES
  > !define yellow stone
  > !define wiki object oriented programming

GUIDE
  !define will only show definition on receiving exact info,
  in case a word have more than one meaning, related topics
  (not more than three) will be displayed. To get more acc-
  urate results pass more keywords in search phrase sepearted  
  with spaces. Eg: 'react' means many things but if you want 
  to get definition for 'reactjs' use command like this:

  > !define reactjs
          OR
  > !define wiki react javascript

  For now, !define only provide information about things, places,
  events, news etc. and does not provide meaning of the words from
  english dictionary. DDG bang redirects will also not work here.
    \`\`\` 
    `
  );
};

/** ---------------
 * HELPER FUNCTIONS
 * ----------------*/

/** notifyErrors: Notify maintainer and the end-user about the error. */
async function notifyErrors(message, err = '') {
  const maintainerID = '274434863711518722';
  // NOTE: maintainer ID can be changed above
  const author = message.guild.member(maintainerID);
  author.send(`Message ID: ${message.id}\n` + '```' + err + '```');
  await message.channel.send(`Some internal error occured, maintainer ${author} has been notified.`);
};

/** sendMessage: checks for errors then send message to the channel. */
async function sendMessage(message, messageContent) {
  try {
    await message.channel.send(messageContent);
  } catch (err) {
    return notifyErrors(message, err);
  }
};

/** generateQueryURL: generate api query URL for service. */
function generateQueryURL(phrase, service = 'ddg') {
  const queryURLs = {
    wiki: `https://en.wikipedia.org/w/api.php?action=opensearch&list=search&search=${phrase}&format=json&formatversion=2`,
    ddg: `https://api.duckduckgo.com/?q=${phrase}&format=json`
  };
  return encodeURI(queryURLs[service]);
};

