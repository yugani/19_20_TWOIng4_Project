var express = require('express');
var router = express.Router();
var User = require('../controllers/users-controllers.js');

// GET all users
router.get('/', User.findAll);

// GET one user
router.get('/:userId', User.findOne);

// PUT Create one user
router.put('/', User.create);

// POST Update one user
router.post('/:userid', User.update);

// DELETE Delete one user
router.delete('/:userId', User.delete);

module.exports = router;