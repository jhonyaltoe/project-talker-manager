const { fs } = require('../helpers');

const getSpeakerById = async (id) => {
  const data = await fs.read();
  const speaker = data.find((s) => s.id === Number(id));
  return speaker;
};

module.exports = getSpeakerById;