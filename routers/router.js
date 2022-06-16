const express = require('express');
const talkerRoute = require('./talkerRoute');

const route = express.Router({ mergeParams: true });

route.use('/talker', talkerRoute);

module.exports = route;