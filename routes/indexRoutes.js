const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();

router.get("/",function(req,res,next){
    let error = req.flash("error")
res.render('index',{error})
});

router.get("/shop", isLoggedIn, (req,res,next)=>{
res.render('shop')
})
module.exports = router;