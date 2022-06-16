const express = require('express');
const talkerRoute = require('./talkerRoute');
const loginRoute = require('./loginRoute');

const route = express.Router({ mergeParams: true });

route.use('/talker', talkerRoute);

route.use('/login', loginRoute);

module.exports = route;