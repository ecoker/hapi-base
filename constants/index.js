const fs = require('fs')

const format = require('./../services/format')

const constants = {}

const constantsDirectory = `${__dirname}`
const expression = /^((?!index))/i

const directoryFiles = fs.readdirSync(constantsDirectory)
const matchingFiles = directoryFiles.filter(directoryFile => expression.test(directoryFile))

// Add content of files to constants object
matchingFiles.forEach((matchingFile) => {
  const fileBase = format.removeExt(matchingFile)
  const constAttr = format.snakeCaseUpper(fileBase)
  constants[constAttr] = require(`${constantsDirectory}/${matchingFile}`); // eslint-disable-line
})

module.exports = constants
