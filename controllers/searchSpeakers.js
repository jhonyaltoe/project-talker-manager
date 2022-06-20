const services = require('../services');

const searchSpeakers = async (req, res) => {
  try {
    const { q } = req.query;
    const result = await services.searchSpeakers(q);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  } 
};

module.exports = searchSpeakers;