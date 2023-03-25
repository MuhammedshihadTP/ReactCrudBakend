const express=require('express');
const mongoose=require('mongoose');

const userSchma=mongoose.Schema({
    name:{
        type:String
    },
    email:{
       type:String
    },
    address:{
        type:String
    },
    phone:{
        type:Number
    }
})
 const user=mongoose.model('userData',userSchma);
 module.exports=user;