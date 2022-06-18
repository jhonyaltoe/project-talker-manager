const getAllSpeakers = require('./getAllSpeakers');
const getSpeakerById = require('./getSpeakerById');
const loginAndReturnToken = require('./loginAndReturnToken');
const postAddSpeaker = require('./postAddSpeaker');
const addCurrentToken = require('./addCurrentToken');

module.exports = {
  getAllSpeakers,
  getSpeakerById,
  loginAndReturnToken,
  postAddSpeaker,
  addCurrentToken,
};