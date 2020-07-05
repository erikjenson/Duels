const User = require('./user');
const Character = require('./character');
const Board = require('./board');
const Game = require('./game');
const GameHistory = require('.gameHistory');

//A main character can have one or two minor characters.
Character.belongsTo(Character);
Character.hasMany(Character);

//Each game will have one board.
Board.belongsTo(Game);
Game.hasOne(Board);

//A game can have up to 6 users. A unser can play many games.
Game.belongsToMany(User, { through: GameHistory });
User.belongsToMany(Game, { through: GameHistory });

//gameHistory is a through table that inludes
//user's characters for each game.

//but how do we set that character?
//a game is only set to open when all options are chosen.
//when you choose your character you make an association with the game history.

GameHistory.hasOne(Character);
Character.belongsTo(GameHistory);

module.exports = {
  User,
  Character,
  Game,
  Board,
  GameHistory,
};
