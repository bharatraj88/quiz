const BaseService = require('./baseService').BaseService,
    QuestionServiceClass = require('./questionService').QuestionService,
    questionService = new QuestionServiceClass();

module.exports.ParticipantService = class ParticipantService extends  BaseService{

    async postAnswer(questionId, answer){
        let question = await questionService.getById(questionId);
        if(question){
           if(question.answer === answer){
               return {success : true}
           }
           return { success: false , correctAnswer : question.answer}

        }
        else {
            throw new Error('Invalid Question')
        }
    }

}