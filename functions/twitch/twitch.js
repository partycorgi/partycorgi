const clientId = process.env.TWITCH_CLIENT_ID
const twitchApi = 'https://api.twitch.tv/helix'

let streamers

const buildResponse = streamers => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(streamers)
})

exports.handler = async () => {
  if (streamers) buildResponse(streamers)

  const axios = require('axios')
  const params = require('./buildStreamerParams')
  const paramsSerializer = require('./paramsSerializer')

  const options = {
    headers: {
      'Client-ID': clientId
    },
    params,
    paramsSerializer
  }

  try {
    const response = await axios.get(`${twitchApi}/users`, options)
    streamers = response.data

    return buildResponse(streamers)
  } catch (error) {
    const { data } = error.response

    return {
      statusCode: data.status,
      body: JSON.stringify(data)
    }
  }
}
