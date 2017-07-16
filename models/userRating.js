const db = require('../bin/db');
const Sequelize = db.Sequelize;

const UserRating = db.sequelize.define('userRating', {
  user_id: Sequelize.INTEGER,
  win_count: Sequelize.INTEGER,
  lose_count: Sequelize.INTEGER,
  rating: Sequelize.INTEGER,
});

module.exports = UserRating;