const Sequelize = require('sequelize');
const db = require('../db');

const Character = db.define('character', {
  type: {
    type: Sequelize.String,
    allowNull: false,
    validate: {
      is: 'main' || 'minor',
    },
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  strength: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  weapon: {
    type: Sequelize.String,
    allowNull: false,
    validate: {
      is: 'blaster' || 'saber',
    },
  },
});

module.exports = Character;
