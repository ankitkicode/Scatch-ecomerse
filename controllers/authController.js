const userModel = require("../models/user");
const bcrypt = require('bcryptjs');
const generateToken = require("../utils/generateToken");

module.exports.registerController = async (req, res) => {
    try {
        const { fullname, email, password,  } = req.body;

        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).send({ error: "Email already exists" });
        }

        const user = new userModel({
            fullname,
            email,
            password,
        });
       
        await user.save();
        const token = generateToken(user);
        console.log(token)
        res.cookie("token",token)
        res.json({ message: "User registered successfully" , user, token});
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

module.exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).send({ error: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password, function(err, result) {
            if (result) {
                const token = generateToken(user);
                res.cookie("token", token);
                res.redirect("/shop"); // Redirect to /shop route
            } else {
                res.status(400).send({ error: "Invalid email or password" });
            }
        });

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}
module.exports.logoutController = async (req, res) => {
 res.cookie("token","");
    res.redirect("/")
}
