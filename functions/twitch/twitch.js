const axios = require('axios')
const qs = require('qs')

const clientId = 'gxxzqrebbfbwskumjfbpsxve8tnsdn' //process.env.TWITCH_CLIENT_ID
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

  const params = require('./buildStreamerParams')

  const options = {
    headers: {
      'Client-ID': clientId
    },
    params,
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
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
