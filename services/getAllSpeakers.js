const models = require('../models');

const getAllSpeakers = async () => {
  const data = await models.getAllSpeakers();
  return data;
};

module.exports = getAllSpeakers;