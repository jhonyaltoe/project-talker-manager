const { read, write } = require('./fs');
const newErrorCreator = require('./errors');

module.exports = {
  fs: {
    read,
    write,
  },
  errors: {
    newErrorCreator,
  },
};