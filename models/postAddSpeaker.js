const { fs } = require('../helpers');

const postAddSpeaker = async (speakerInfo) => {
  console.log(speakerInfo);
  const response = await fs.readTalker();
  const newId = response[response.length - 1].id + 1;
  response.push({ ...speakerInfo, id: newId });
  await fs.writeTalker(response);
};

module.exports = postAddSpeaker;