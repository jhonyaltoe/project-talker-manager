const services = require('../services');

const getAllSpeakers = async (_req, res) => {
  try {
    const data = await services.getAllSpeakers();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = getAllSpeakers;