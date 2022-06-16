const express = require('express');
const controllers = require('../controllers');

const talkerRoute = express.Router({ mergeParams: true });

talkerRoute.get('/', controllers.getAllSpeakers);

module.exports = talkerRoute;
