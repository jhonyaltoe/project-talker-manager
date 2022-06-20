const { fs } = require('../helpers');

const updateSpeaker = async () => {
  const speakers = await fs.readTalker();
  return speakers;
};

module.exports = updateSpeaker;