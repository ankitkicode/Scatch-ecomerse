const jwt = require("jsonwebtoken")

const generateToken = (user) => {
    return jwt.sign({ email: user.email, id: user._id }, "JWT_SECERET");
}

module.exports = generateToken;