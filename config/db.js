const mongoose=require('mongoose');
require('dotenv').config();
const connectDb=()=>{
    
mongoose.connect(process.env.MONGO_URL).then(()=>
console.log("Db connected")
)
.catch((error)=>{
        console.log("error in db Connect")
    }
)
}
module.exports=connectDb;