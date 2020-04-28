const client = require('../utils/client').getClient()
const { view } = require('../utils')

module.exports = [
    {
        path: `/`,
        middleware: ['web'],
        method: () => {
            return view('index', { test: "hello world" });
        }
    },
    {
        path: `/member-count`,
        middleware: ['api'],
        method: () => {
            return {
                memberCount: client.guilds.first().memberCount
            }
        }
    }
]