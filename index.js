const express=require('express');
const connectDb=require('./config/db')
const createRoute=require('./routes/createRoute')
const app=express();
app.use(express.json())
require('dotenv').config()
app.use('/api',createRoute)
app.use('/',createRoute)
app.listen(process.env.PORT,()=>{
    console.log(`App is starting at ${process.env.PORT}`);
})
connectDb();