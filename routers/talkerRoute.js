const express = require('express');
const controllers = require('../controllers');

const talkerRoute = express.Router({ mergeParams: true });

talkerRoute.get('/', controllers.getAllSpeakers);

talkerRoute.get('/:id', controllers.getSpeakerById);

module.exports = talkerRoute;
