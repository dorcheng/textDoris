const router = require('express').Router();
const { Answer, Question } = require('../../db/models');

router.get('/', function(req, res, next) {
  Question.findAll({
    include: [{
      model: Answer
    }]
  })
  .then(questions => res.json(questions))
  .catch(next);
});

router.get('/:id', function(req, res, next) {
  Question.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Answer
    }]
  })
  .then(question => res.json(question))
  .catch(next);
});

router.post('/', function(req, res, next) {
  return Question.create(req.body)
    .then(newQuestion => res.json(newQuestion))
    .catch(next);
});

module.exports = router;
