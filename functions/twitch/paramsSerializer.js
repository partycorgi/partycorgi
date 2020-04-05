/* Some Twitch APIs require multiple query params with
 * the same key, such as /users?login=user1&login=user2
 *
 * Axios uses a JavaScript object to construct query params.
 * JavaScript object keys must all be unique, meaning we
 * must use a custom paramsSerializer to allow the param
 * object keys to contain arrays.
 *
 * Example params object:
 *
 * {
 *   login: ['user1', 'user2']
 * }
*/

const qs = require('qs')

module.exports = (params) =>
  qs.stringify(params, { arrayFormat: 'repeat' })
