const mongoose=require('mongoose');
const todoSchema=mongoose.Schema({
    title:{
    type:String,
    required:true
    },
    description:{
        type:String,
        reuired:true
    },
    createdAt:{
        type:Date,
       
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
})
const todoModel=mongoose.model('TODO',todoSchema);
module.exports=todoModel;