const _ = require('lodash')
const fs = require('fs')

const routesDirectory = `${__dirname}`
const routeFileExpression = /.*routes\.js/i

const directoryFiles = fs.readdirSync(routesDirectory)
const matchingFiles = directoryFiles.filter(directoryFile => routeFileExpression.test(directoryFile)) // eslint-disable-line
const routes = _.flatten(
  matchingFiles.map(matchingFile => require(`${routesDirectory}/${matchingFile}`)) // eslint-disable-line
)

module.exports = routes
