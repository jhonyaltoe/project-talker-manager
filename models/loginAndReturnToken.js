const { fs } = require('../helpers');

const postEmailPassReturnToken = async (email) => {
  const response = await fs.readLogin();
  const user = response.find((s) => s.email === email);
  return user;
};

module.exports = postEmailPassReturnToken;