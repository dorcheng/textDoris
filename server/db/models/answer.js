const Sequelize = require('sequelize');
const db = require('../index');

const Answer = db.define('answer', {
  answer: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Answer;
