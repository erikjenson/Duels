const db = require('../db');

//A through table for users and games.
//For every instance, a user will be associated with a character
const GameHistory = db.define('gameHistory');

module.exports = GameHistory;
