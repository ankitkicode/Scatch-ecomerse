const express = require('express');
// const User = require('../models/user');
// const bcrypt = require('bcryptjs');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("This is user router")
})

// // Register a new user
// router.post('/register', async (req, res) => {
//     try {
//         const { fullname, email, password, contact, picture } = req.body;
//         const user = new User({ fullname, email, password, contact, picture });
//         await user.save();
//         res.status(201).send(user);
//     } catch (error) {
//         res.status(400).send({ error: error.message });
//     }
// });

// // User login
// router.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).send({ error: 'Invalid login credentials' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).send({ error: 'Invalid login credentials' });
//         }

//         res.send(user);
//     } catch (error) {
//         res.status(500).send({ error: error.message });
//     }
// });

module.exports = router;
