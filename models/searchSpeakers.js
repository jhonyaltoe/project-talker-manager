const { fs } = require('../helpers');

const searchSpeakers = async (q) => {
  const speakers = await fs.readTalker();
  const foundSpeakers = speakers.filter((s) => s.name.includes(q));
  console.log(foundSpeakers);
  return foundSpeakers;
};

module.exports = searchSpeakers;