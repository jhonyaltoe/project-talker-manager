const services = require('../services');
const { errors } = require('../helpers');

const getSpeakerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const speaker = await services.getSpeakerById(id);

    if (!speaker) {
      next(errors.newErrorCreator('Pessoa palestrante não encontrada', 404));
      return;
    }
    
    return res.status(200).json(speaker);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

module.exports = getSpeakerById;