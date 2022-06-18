const {
  readTalker,
  writeTalker,
  readLogin,
  writeLogin,
  readToken,
  writeToken,
} = require('./fs');
const newErrorCreator = require('./errors');
const randomToken = require('./crypto');
const {
  loginSchema,
  addSpeakerSchema,
} = require('./joi');

module.exports = {
  fs: {
    readTalker,
    writeTalker,
    readLogin,
    writeLogin,
    readToken,
    writeToken,
  },
  errors: {
    newErrorCreator,
  },
  crypto: {
    randomToken,
  },
  Joi: {
    loginSchema,
    addSpeakerSchema,
  },
};