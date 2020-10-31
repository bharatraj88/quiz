var express = require('express');
var router = express.Router();

const Redis = require("ioredis");
const ParticipantServiceClass = require('../service/participantService').ParticipantService,
    participantService = new ParticipantServiceClass();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/answer', function(req, res, next) {
    participantService.postAnswer(req.body.id, req.body.answer).then(response => res.send(JSON.stringify(response)))
});

router.get('/subscribe', function(req, res, next) {
    const subscriptionChannel = req.query.channel;
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive'
    };
    res.writeHead(200, headers);
    res.write(`data: ${JSON.stringify({'connected': true})}\n\n`);

    let redis = new Redis();

    redis.subscribe(subscriptionChannel, (err, count) => {
    });

    redis.on("message", (channel, message) => {
        res.write(`data: ${message}\n\n`);
    });

});

module.exports = router;