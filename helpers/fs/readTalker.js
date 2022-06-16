const fs = require('fs/promises');

const readTalker = async () => {
  try {
    const data = await fs.readFile('talker.json', { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = readTalker;
