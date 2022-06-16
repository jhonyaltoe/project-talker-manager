const { fs } = require('../helpers');

const postEmailPassReturnToken = async (email) => {
  const response = await fs.readLogin();
  const data = response.find((s) => s.email === email);
  return data;
};

module.exports = postEmailPassReturnToken;