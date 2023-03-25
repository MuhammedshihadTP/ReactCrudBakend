const { Router } = require("express");
const express=require("express");
const { postData, getData, deleteData,findData, updateData } = require("../controllers/userController");

const router=Router()

router.post('/adduser',postData)
router.get('/user',getData)
router.delete('/user/:id',deleteData)
router.get('/update/:id',findData)
router.put('/update/:id',updateData)

module.exports=router