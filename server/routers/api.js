const express = require('express');
const userController = require('../controllers/userController');
const router = express();

router.post('/login', userController.getUser, (req, res) =>
  res.status(200).json(res.locals.user)
);

router.post('/signup', userController.createUser, (req, res) =>
res.status(200).json(res.locals.user)
);


module.exports = router;