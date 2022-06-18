const { fs, errors, Joi } = require('../helpers');

const validateAddSpeaker = async (req, _res, next) => {
  const { authorization } = req.headers;
  const { name, age, talk } = req.body;

  if (!authorization) return next(errors.newErrorCreator('Token não encontrado', 401));

  const { token } = await fs.readToken();

  console.log(`authorization ==> ${authorization}`);
  console.log(`Token ==> ${token}`);

  if (token !== authorization) return next(errors.newErrorCreator('Token inválido', 401));

  const { error } = Joi.addSpeakerSchema.validate({ name, age, talk });

  if (error) return next(errors.newErrorCreator(error.message, 400));

  next();
};

module.exports = validateAddSpeaker;