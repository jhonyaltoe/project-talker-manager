const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const talkerRoute = express.Router({ mergeParams: true });

talkerRoute.get('/', controllers.getAllSpeakers);

talkerRoute.get('/:id', controllers.getSpeakerById);

talkerRoute.use(middlewares.tokenValidation, middlewares.validateAddSpeaker);

talkerRoute.post('/', controllers.postAddSpeaker);

talkerRoute.put('/:id', controllers.updateSpeaker);

module.exports = talkerRoute;
