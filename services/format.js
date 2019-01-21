const removeExt = str => str.replace(/\.[a-z]+$/, '')

const snakeCase = str => str.replace(/([A-Z])/g, '_$1').toLowerCase()

const snakeCaseUpper = str => snakeCase(str).toUpperCase()

module.exports = {
  removeExt,
  snakeCase,
  snakeCaseUpper,
}
