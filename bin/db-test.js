var dotenv = require('dotenv');
var dotenvConfig = {};

/**
 * Set Environment Config
 */
if (process.env.ENV === 'PRODUCTION') {
  dotenvConfig = {
    path: '.production.env'
  };
} else {
  dotenvConfig = {
    path: '.development.env'
  };
}

dotenv.config(dotenvConfig);

var db = require('./db');
var Users = require('../models/users');

Users
  .findAll()
  .then(users => {
    console.log(users.length);
  });