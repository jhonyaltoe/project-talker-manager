const models = require('../models');

const updateSpeaker = async () => {
  const speakers = await models.updateSpeaker();
  return speakers;
};

module.exports = updateSpeaker;