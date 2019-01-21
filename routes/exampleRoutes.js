const ExampleController = require('../controllers/exampleController')

module.exports = [
  {
    method: 'GET',
    path: '/example',
    handler: ExampleController.demo,
  },
]
