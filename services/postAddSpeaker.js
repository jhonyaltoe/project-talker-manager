const models = require('../models');

const postAddSpeaker = async (speaker) => {
  const newSpeaker = await models.postAddSpeaker(speaker);
  return newSpeaker;
};

module.exports = postAddSpeaker;