const express = require('express');
const controllers = require('../controllers');

const loginRoute = express.Router({ mergeParams: true });

loginRoute.post('/', controllers.loginAndReturnToken);

module.exports = loginRoute;