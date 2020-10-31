var express = require('express');
var router = express.Router();

const ModeratorServiceClass = require('../service/moderatorService').ModeratorService,
    moderatorService = new ModeratorServiceClass();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/channel', function(req, res, next) {
    res.send(moderatorService.createChannel());
});

router.post('/question', function(req, res, next) {
    res.send(moderatorService.postQuestion(req.body.id, req.body.channel));
});

module.exports = router;