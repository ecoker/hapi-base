const winston = require('winston')

const logsDirectory = `${__dirname}/../logs/`
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: `${logsDirectory}error.log`, level: 'error' }),
    new winston.transports.File({ filename: `${logsDirectory}combined.log` }),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
    ),
  }))
}

module.exports = logger
