const { fs, errors } = require('../helpers');

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return next(errors.newErrorCreator('Token não encontrado', 401));

  const { token } = await fs.readToken();

  if (token !== authorization) return next(errors.newErrorCreator('Token inválido', 401));

  next();
};

module.exports = tokenValidation;