const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const talkerRoute = express.Router({ mergeParams: true });

talkerRoute.get('/', controllers.getAllSpeakers);

talkerRoute.get('/:id', controllers.getSpeakerById);

talkerRoute.use(middlewares.tokenValidation);

talkerRoute.delete('/:id', controllers.deleteSpeaker);

talkerRoute.use(middlewares.validateAddSpeaker);

talkerRoute.post('/', controllers.postAddSpeaker);

talkerRoute.put('/:id', controllers.updateSpeaker);

module.exports = talkerRoute;
