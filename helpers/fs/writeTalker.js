const fs = require('fs/promises');

const writeTalker = async (data) => {
  try {
    await fs.writeFile('talker.json', JSON.stringify(data));
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = writeTalker;