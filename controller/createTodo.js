const todoModel=require('../models/user')

const getTodo=async(req,res)=>{
    try{
        const data= await todoModel.find({});
        if(data){
           return res.status(200).json({
        success:true,
        data:data
     })
        }
    }
    catch(error){
            res.status(500).json({
            success:false,
            "msg":"Error"
         })
    }
}


const createToDo=async(req,res)=>{
    try{
    const {title,description}=req.body;
    const newTodo=new todoModel({
        title,
        description
    })
     newTodo.save();
     res.status(200).json({
        success:true,
        "msg":"To Do created successfully"
     })
    }
    catch(error){
        res.status(500).json({
            success:false,
            "msg":"Error"
         })
    }
   

}
const deleteTodo=async(req,res)=>{
    try{
    const {id}=req.params;
    console.log(id);
    const findid=await todoModel.findOne({_id:id});
    if(!findid){
       return  res.status(200).json({
            success:false,
            "msg":"To Do ID not Found"
         })
    }
    const del=await todoModel.findByIdAndDelete({_id:id});
    res.status(200).json({
        success:true,
        "msg":"To Do Deleted successfully"
     })

    }
    catch(error){
        res.status(500).json({
            success:false,
            "msg":"Error"

         })
    }

}
 const updateTodo=async(req,res)=>{
    try{
        const {title,description}=req.body;
        const {id}=req.params;
        const up=await todoModel.findByIdAndUpdate({_id:id},{
            title,
            description
        })
       return res.status(200).json({
            success:true,
            "msg":"To Do Updated successfully"
         })
    }
    catch(error){
        res.status(500).json({
            success:false,
            "msg":"Error"

         })
    }
 }
module.exports ={createToDo, deleteTodo,getTodo,updateTodo};