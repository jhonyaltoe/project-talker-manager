const { readTalker, writeTalker, readLogin, writeLogin } = require('./fs');
const newErrorCreator = require('./errors');

module.exports = {
  fs: {
    readTalker,
    writeTalker,
    readLogin,
    writeLogin,
  },
  errors: {
    newErrorCreator,
  },
};