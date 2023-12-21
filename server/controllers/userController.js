const User = require('../models/loginModel');

const testController = {};

testController.getUser = (req, res, next) => {
  User.find()
    .then(data => res.locals.user = data)
    .then(() => next())
    .catch(() => next({
        log: 'Express error handler caught in testController.getUser middleware.',
        message: { err: 'An error occurred when retrieving user' }
      }))
}

testController.createUser = (req, res, next) => {
  User.create(req.body)
    .then((data) => res.locals.user = data)
    .then(() => next())
    .catch(() => next({
      log: 'Express error handler caught in testController.createUser middleware.',
        message: { err: 'An error occurred when creating user' }
    }))
}

module.exports = testController;