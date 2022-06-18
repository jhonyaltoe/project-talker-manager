const services = require('../services');

const postAddSpeaker = async (req, res) => {
  try {
    const { name, age, talk } = req.body;
    const newSpeaker = await services.postAddSpeaker({ name, age, talk });
    res.status(201).json(newSpeaker);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

module.exports = postAddSpeaker;