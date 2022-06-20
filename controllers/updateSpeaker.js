const services = require('../services');
const { fs } = require('../helpers');

const updateSpeaker = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSpeaker = req.body;
    updatedSpeaker.id = Number(id);

    const speakers = await services.updateSpeaker();

    const indexSpeaker = speakers.findIndex((speaker) => speaker.id === Number(id));
    speakers.splice(indexSpeaker, 1, updatedSpeaker);

    await fs.writeTalker(speakers);

    res.status(200).json(updatedSpeaker);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = updateSpeaker;