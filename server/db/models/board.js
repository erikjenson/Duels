const Sequelize = require('sequelize');
const db = require('../db');

const Board = db.define('board', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  img: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //include layout with starting locations for
  //characters
});

module.exports = Board;
