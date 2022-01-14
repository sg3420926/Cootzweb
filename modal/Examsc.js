const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExamSc = new Schema({
    ExamName: {
        type: String,
        required: true,
        trim: true
    }, 

    logo: {
        type: String
    },
    
    Detail: {
        type: String
    },
    Code:{
        type: String
    }
});

const exam = mongoose.model('Exam', ExamSc);

module.exports = exam;