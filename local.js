
const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./Routes/adminRoutes');
const getUsers = require('./Routes/userRoutes'); //for every route you have to import the route
// const { getUserById } = require('./Controllers/userController');
const getUserById = require('./Routes/userRoutes');
const getUserByCountry = require('./Routes/userRoutes');
const getShopsByType = require('./Routes/userRoutes');

app.use('/routes', router);
app.use('/users', getUsers);
app.use('/ById', getUserById);
app.use('/ByCountry', getUserByCountry);
app.use('/getShop', getShopsByType);

// const PORT = 3030;
app.listen(3030, () => {
    console.log(`Server is running on http://localhost:3030`);
});



