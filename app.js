 const express = require('express');
 const cors =require('cors');
 const mongoose=require('mongoose');
const { urlencoded } = require('express');
const router=require("./routers/userRouter")


mongoose.connect('mongodb://127.0.0.1:27017/reactCrud')
const db=mongoose.connection
db.on('error',(erorr)=>{
    console.log(erorr);
})
db.once('open',()=>{
    console.log("connected database");
})

 const app = express()
 const port = 4000

 app.use(cors());
 app.use(express.json())
 app.use(express.urlencoded({extended:true}));
 app.use("/",router);

 

 app.listen(port, () => console.log(`listening on port ${port}!`))