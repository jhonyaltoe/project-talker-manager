const models = require('../models');

const getSpeakerById = async (id) => {
  const speaker = await models.getSpeakerById(id);

  return speaker;
};

module.exports = getSpeakerById;