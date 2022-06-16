const fs = require('fs/promises');

const writeLogin = async (data) => {
  try {
    await fs.writeFile('login.json', JSON.stringify(data));
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = writeLogin;