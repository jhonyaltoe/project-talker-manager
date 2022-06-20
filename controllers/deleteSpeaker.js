const models = require('../models');

const deleteSpeaker = async (req, res) => {
  try {
    const { id } = req.params;
    await models.deleteSpeaker(id);
    return res.status(204).json();
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = deleteSpeaker;