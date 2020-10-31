var express = require('express');
var router = express.Router();

const ServiceClass = require('../service/questionService').QuestionService;
const service = new ServiceClass();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let questions = service.getAll().then((questions) => res.send(JSON.stringify(questions)));
});


router.post('/', function(req, res, next) {
  service.save(req.body)
  res.send('Ok Saved');
});

module.exports = router;
