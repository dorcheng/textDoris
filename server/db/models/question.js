const Sequelize = require('sequelize');
const db = require('../index');

const Question = db.define('question', {
  author: {
    type: Sequelize.STRING,
    defaultValue: 'Anonymous'
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Question;
