const Answer = require('./answer');
const Question = require('./question');

Question.hasOne(Answer);

module.exports = {
  Answer,
  Question
};
