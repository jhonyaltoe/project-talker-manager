const { readTalker, writeTalker, readLogin, writeLogin } = require('./fs');
const newErrorCreator = require('./errors');
const randomToken = require('./crypto');

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
  crypto: {
    randomToken,
  },
};