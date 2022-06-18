const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const talkerRoute = express.Router({ mergeParams: true });

talkerRoute.get('/', controllers.getAllSpeakers);

talkerRoute.get('/:id', controllers.getSpeakerById);

talkerRoute.post('/', middlewares.validateAddSpeaker, controllers.postAddSpeaker);

module.exports = talkerRoute;
