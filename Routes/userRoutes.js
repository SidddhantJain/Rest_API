const express = require('express');
const router = express.Router();
const importRoutes = require('../Controllers/userController');


router.get('/getUsers', importRoutes.getUsers);//this is a subroute from the local.js
router.get('/getUsersById/:Id', importRoutes.getUserById);
router.get('/getUserByCountry', importRoutes.getUserByCountry);
router.get('/getshopsByType', importRoutes.getShopsByType);

module.exports = router;