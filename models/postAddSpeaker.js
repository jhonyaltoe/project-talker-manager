const { fs } = require('../helpers');

const postAddSpeaker = async (speakerInfo) => {
  const response = await fs.readTalker();
  const newId = response[response.length - 1].id + 1;
  const newSpeaker = { id: newId, ...speakerInfo };
  response.push(newSpeaker);
  await fs.writeTalker(response);
  return newSpeaker;
};

module.exports = postAddSpeaker;