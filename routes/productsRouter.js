const express = require('express');
// const User = require('../models/user');
// const bcrypt = require('bcryptjs');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("This is products router")
});

router.post("/create-product",(req,res,next)=>{
res.render("createproducts")
})

module.exports = router;