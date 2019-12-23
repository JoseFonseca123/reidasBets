var Sequelize = require('sequelize');

module.exports = new Sequelize('bets', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
  logging:  false //console.log //
  ,pool: {
    max: 8,
    min: 0,
    idle: 200000,
    // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
    acquire: 1000000,
  }
  });

