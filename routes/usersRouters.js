const express = require("express");
const {registerController, loginController, logoutController} = require("../controllers/authController")


const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is user router");

});


// Register a new user
router.post("/register",registerController );

// User login
router.post('/login',loginController );
router.get("/logout",logoutController)

module.exports = router;

