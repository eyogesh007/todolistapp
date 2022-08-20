const mongoose = require('mongoose');

let Todoschema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Register'
    },
    username :{
        type : String,
        required : true
    },
    date:{
        type:String,
        requires:true
    },
    title:{
        type:String,
        required:true
    },
    task:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Todoschema',Todoschema)