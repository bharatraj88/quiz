const BaseService = require('./baseService').BaseService,
    quizModel = require('../model/quiz')


module.exports.QuestionService = class QuestionService extends  BaseService{

    async getAll(){
        return await quizModel.model.find();
    }

    async getById(id){
        return quizModel.model.findOne({_id: id});
    }


    async save(quiz){
        let model =  new quizModel.model(quiz);
        await model.save();
    }

}