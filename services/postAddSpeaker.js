const models = require('../models');

const postAddSpeaker = async (speaker) => {
  await models.postAddSpeaker(speaker);
};

module.exports = postAddSpeaker;