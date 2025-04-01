const {createToDo,deleteTodo,getTodo,updateTodo}=require('../controller/createTodo')
const express=require('express');
const router=express.Router()

router.get('/',getTodo)
router.post('/create',createToDo)
router.delete('/delete/:id',deleteTodo)
router.put('/update/:id',updateTodo)
module.exports=router