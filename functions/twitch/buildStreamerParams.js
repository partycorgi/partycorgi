const listOfStreamers = require('../../data/list-of-streamers.json')

module.exports = {
  login: listOfStreamers.map(item => item.username)
}
