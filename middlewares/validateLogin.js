const { Joi } = require('../helpers');
const { errors } = require('../helpers');

const validateLoging = async (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = Joi.loginSchema.validate({ email, password });
  if (!error) return next();
  next(errors.newErrorCreator(error.message, 400));
};

module.exports = validateLoging;