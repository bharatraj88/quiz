const BaseService = require('./baseService').BaseService,
    QuestionServiceClass = require('./questionService').QuestionService,
    questionService = new QuestionServiceClass(),
    uuid = require('uuid');


module.exports.ModeratorService = class ModeratorService extends  BaseService{

    createChannel(){
        return uuid.v4();
    }

    async postQuestion(questionId, channel){
        let question = await questionService.getById(questionId);
        if(question){
            this.getRedisClient().publish(channel, question.question);
        }
        else {
            throw new Error('Invalid Question')
        }
    }

}