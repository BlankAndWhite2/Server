var Sequelize = require('sequelize');
var env = process.env;

var sequelize = new Sequelize(env.MYSQL_DB_PATH, env.MYSQL_DB_USER_NAME, env.MYSQL_DB_USER_PW, {
  'host': 'localhost',

  'dialect': 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

module.exports = {
  Sequelize,
  sequelize
};