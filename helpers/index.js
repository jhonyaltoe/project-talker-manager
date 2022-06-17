const { readTalker, writeTalker, readLogin, writeLogin } = require('./fs');
const newErrorCreator = require('./errors');
const randomToken = require('./crypto');
const loginSchema = require('./joi');

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
  loginSchema,
};