const express = require('express');
const router = express.Router();

const users_controllers = require('../controllers/users_controllers');

router.get('/deva',users_controllers.userProfile);

module.exports = router;