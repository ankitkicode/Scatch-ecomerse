const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const isLoggedIn = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        req.flash("error", "You need to login first");
        return res.redirect("/");
    }
    try {
        const decoded = jwt.verify(token, "JWT_SECERET");
        const user = await userModel.findOne({ email: decoded.email }).select("-password");
        if (!user) {
            req.flash("error", "Unauthorized access");
            return res.redirect("/");
        }
        req.user = user;
        next();
    } catch (error) {
        req.flash("error", "Something went wrong in the middleware");
        res.redirect("/");
    }
}

module.exports = isLoggedIn;
