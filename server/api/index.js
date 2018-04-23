const api = require('express').Router();

api.use('/questions', require('./routes/question'));

api.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = api;
