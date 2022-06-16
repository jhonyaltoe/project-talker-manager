const fs = require('fs/promises');

const read = async () => {
  try {
    const data = await fs.readFile('talker.json', { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = read;
