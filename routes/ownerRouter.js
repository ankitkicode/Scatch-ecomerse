const express = require('express');
// const User = require('../models/user');
// const bcrypt = require('bcryptjs');
const router = express.Router();
const ownerModel = require('../models/owner')



router.post('/create-owner',async (req,res)=>{
  try {
    const { fullname,email,password} = req.body;
    const owner = await ownerModel.find();
    if(owner.length > 0){
       return res.status(400).json({message:"Owner already exists"})
    }
    const newOwner = new ownerModel({
          fullname,
          email,
          password
    });
    await newOwner.save();
    res.status(200).json({message:"Owner created successfully"})
  } catch (error) {
    console.log(error)
  }
});

router.get("/create-product",(req,res,next)=>{
res.render("createproducts")
})



module.exports = router;