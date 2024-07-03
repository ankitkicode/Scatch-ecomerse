const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path');
const usersRoutes = require('./routes/usersRouters');
const ownerRoutes = require('./routes/ownerRouter');
const productsRoutes = require("./routes/productsRouter")
const dbConnection= require("./congif/dbConnection")

app.use(express.json());
dbConnection()

app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', "ejs");

// Routes
app.use('/users', usersRoutes);
app.use('/products',productsRoutes);
app.use('/owner', ownerRoutes);

// Fallback route for undefined routes
app.use('*',(req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'notfound.html'));
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});