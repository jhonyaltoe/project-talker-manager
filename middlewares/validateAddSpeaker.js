const { errors, Joi } = require('../helpers');

const validateAddSpeaker = async (req, _res, next) => {
  const { name, age, talk } = req.body;

  const { error } = Joi.addSpeakerSchema.validate({ name, age, talk });

  if (error) return next(errors.newErrorCreator(error.message, 400));

  next();
};

module.exports = validateAddSpeaker;