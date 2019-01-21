const { goodWinston } = require('hapi-good-winston')
const Hapi = require('hapi')

const log = require('./services/log')

const constants = require('./constants')
const routes = require('./routes')

const server = Hapi.server({
  host: constants.HAPI.HOST,
  port: constants.HAPI.PORT,
  routes: {
    cors: constants.HAPI.CORS,
  },
})

const options = {
  ops: {
    interval: 60000, // hourly
  },
  reporters: {
    winston: [goodWinston(log)],
  },
}

// Start
async function start() {
  try {
    await server.register({ plugin: require('good'), options }) // eslint-disable-line

    server.route(routes)

    await server.start()
    log.info(`Server running at: ${server.info.uri}`)
  } catch (error) {
    log.error(error)
    process.exit(1)
  }
}

start()
