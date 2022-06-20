const models = require('../models');

const searchSpeakers = async (q) => {
  const foundSpeakers = await models.searchSpeakers(q);
  return foundSpeakers;
};

module.exports = searchSpeakers;