const models = require('../models');

const loginAndReturnToken = async (email, _password, token) => {
  const user = await models.loginAndReturnToken(email, token);
  if (!user) throw new Error('Usuário não encontrado.');
  await models.addCurrentToken(token);
  return user;
};

module.exports = loginAndReturnToken;