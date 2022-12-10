const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose.set("strictQuery", false);
const options = {
  strict: "throw",
  strictQuery: false
};
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
},options)

module.exports = mongoose.model('Todoschema',Todoschema)