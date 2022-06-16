const fs = require('fs/promises');

const readLogin = async () => {
  try {
    const data = await fs.readFile('login.json', { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = readLogin;