const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '22nachoS!', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
