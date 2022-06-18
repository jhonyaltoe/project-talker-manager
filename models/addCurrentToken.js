const { fs } = require('../helpers');

const addCurrentToken = async (token) => {
  const newToken = { token };
  await fs.writeToken(newToken);
};

module.exports = addCurrentToken;