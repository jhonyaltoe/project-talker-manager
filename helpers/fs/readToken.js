const fs = require('fs/promises');

const readToken = async () => {
  try {
    const data = await fs.readFile('currentToken.json', { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = readToken;