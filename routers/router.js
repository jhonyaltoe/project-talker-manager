const express = require('express');
const talkerRoute = require('./talkerRoute');
const loginRoute = require('./loginRoute');
const middlewares = require('../middlewares');

const route = express.Router({ mergeParams: true });

route.use('/talker', talkerRoute);

route.use('/login', middlewares.validateLoging, loginRoute);

module.exports = route;