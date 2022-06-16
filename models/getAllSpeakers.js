const { fs } = require('../helpers');

const getAllSpeakers = async () => {
  const data = await fs.read();
  return data;
};

module.exports = getAllSpeakers;