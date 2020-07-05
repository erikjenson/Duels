const Sequelize = require('sequelize');
const db = require('../db');

const Game = db.define('game', {
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: 'open' || 'closed',
    },
  },
  startDate: {},
});
//this will store current game state.

module.exports = Game;
