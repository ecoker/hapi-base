const _ = require('lodash');
const goodWinston = require('hapi-good-winston').goodWinston;
const Hapi = require('hapi');

const log = require('./services/log');

const constants = require('./constants');
const routes = require('./routes');

const server = Hapi.server({
  host: constants.HAPI.HOST,
  port: constants.HAPI.PORT,
  routes: {
    cors: constants.HAPI.CORS,
  },
});

const options = {
  ops: {
    interval: 60000, // hourly
  },
  reporters: {
      winston: [goodWinston(log)],
  },
};

// Start
async function start() {
  try {
    await server.register({ plugin: require('good'), options });

    server.route(routes);

    await server.start();
    log.info(`Server running at: ${server.info.uri}`);
  }
  catch (err) {
    log.error(err);
    process.exit(1);
  }
};

start();
