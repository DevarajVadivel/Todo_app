const express = require('express');

const route = express.Router();
const controller = require('../controllers/home_controller');

console.log("Route loaded");

route.get('/',controller.home);
route.use('/home', require('./users'));

module.exports = route;