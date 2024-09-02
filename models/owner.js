const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Invalid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    picture: {
        type: String,
        default: 'https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'
    },
    gstin:String,
});

ownerSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
