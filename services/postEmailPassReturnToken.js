const models = require('../models');

const postEmailPassReturnToken = async (email, _password) => {
  const data = await models.postEmailPassReturnToken(email);
  if (!data) throw new Error('Usuário não encontrado.');
  return data;
};

module.exports = postEmailPassReturnToken;