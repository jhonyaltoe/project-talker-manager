const fs = require('fs/promises');

const writeToken = async (data) => {
  try {
    await fs.writeFile('currentToken.json', JSON.stringify(data));
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = writeToken;