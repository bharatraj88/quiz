const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const quizSchema = new Schema({
    question: {type: String},
    options: {type: Array, items: {type: String}},
    answer: {type: String}
})

const COLLECTION_NAME = 'quiz';
mongoose.model(COLLECTION_NAME, quizSchema);

module.exports = {
    model : mongoose.model(COLLECTION_NAME, quizSchema)
};