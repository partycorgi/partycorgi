const fs = require('fs')
const path = require('path')
const http = require('http')
const Config = require('./config')

class ApiServer {
    constructor() {
        this.server = http.createServer((req, res) => {

            let headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Max-Age': 2592000,
            }

            res.writeHead(200, headers)

            let routes = this.getRoutes();
            let routePrefix = Config.getApiRoutePrefix()

            routes.map(route => {
                let routePath = route.path.startsWith('/') 
                    ? route.path.slice(1)
                    : route.path;
                let fullPath = `/${routePrefix}/${routePath}`;
                if (req.url === fullPath) { this.handleResponse(res, route) }
            })
        })
    }

    handleResponse(res, route) {
        let contentHeader = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Max-Age': 2592000,
        }

        route.middleware.includes('web') ? 
            contentHeader['Content-Type'] = 'text/html' :
            contentHeader['Content-Type'] = 'application/json';

        res.writeHead(200, contentHeader)
        let body = route.middleware.includes('web')
            ? route.method().toString()
            : JSON.stringify(route.method())
        res.write(body)
        res.end()
    }

    getServer() {
        return this.server
    }

    getRoutes() {
        return require(path.join(__dirname, '..', 'server', 'routes.js'))
    }

    startListening() {
        this.getServer().listen(Config.getServerPort(), function () {
            console.log(
                [`API web server started and listening on port `.yellow, `${Config.getServerPort()}`.magenta.bold].join('')
            )
        })
    }
}

module.exports = new ApiServer()