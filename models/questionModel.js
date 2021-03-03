const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionsSchema = new Schema({
    title:{
        type:String,
        required:true 
    },
    body:{
        type:String,
        required:true 
    },
    qid:{
        type:Schema.Types.Mixed,
        required:true 
    },
    subject:{
        type:String,
        required:true
    },
    answers:{
        type:Array
    }

}, {timestamps:true} )


const Question= mongoose.model('Question', questionsSchema)

module.exports= Question;