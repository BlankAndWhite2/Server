const db = require('../bin/db');
const Sequelize = db.Sequelize;

const Users = db.sequelize.define('users', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  facebook_id: Sequelize.INTEGER,
  facebook_access_token: Sequelize.STRING,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
});

module.exports = Users;