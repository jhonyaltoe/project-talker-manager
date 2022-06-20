const getAllSpeakers = require('./getAllSpeakers');
const getSpeakerById = require('./getSpeakerById');
const loginAndReturnToken = require('./loginAndReturnToken');
const postAddSpeaker = require('./postAddSpeaker');
const updateSpeaker = require('./updateSpeaker');
const searchSpeakers = require('./searchSpeakers');

module.exports = {
  getAllSpeakers,
  getSpeakerById,
  loginAndReturnToken,
  postAddSpeaker,
  updateSpeaker,
  searchSpeakers,
};