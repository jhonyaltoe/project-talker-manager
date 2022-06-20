const { fs } = require('../helpers');

const deleteSpeaker = async (id) => {
  const speakers = await fs.readTalker();
  const indexSpeaker = speakers.findIndex((s) => s.id === Number(id));
  if (indexSpeaker === -1) throw new Error('Usuário não existe');
  console.log(indexSpeaker);
  speakers.splice(indexSpeaker, 1);
  console.log(speakers);
  await fs.writeTalker(speakers);
};

module.exports = deleteSpeaker;