const express = require('express');

const talkerRoute = express.Router({ mergeParams: true });

talkerRoute.get('/', (_req, res) => {
  res.status(200).json({ message: 'Teste' });
});

module.exports = talkerRoute;
