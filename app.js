const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path');
const userRoutes = require('./routes/user');
const mongoose = require('mongoose')

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', "ejs");

// Routes
app.use('/api/users', userRoutes);

// Fallback route for undefined routes
app.use('*',(req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'notfound.html'));
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});