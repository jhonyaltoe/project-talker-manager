const { fs } = require('../helpers');

const getAllSpeakers = async () => {
  const data = await fs.readTalker();
  return data;
};

module.exports = getAllSpeakers;