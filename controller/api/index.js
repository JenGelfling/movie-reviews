// Import just the router express
const router = require('express').Router();


const userRoutes = require('./user-routes');
const profileRoutes= require('./profile-routes')
const searchResultsRoutes= require('./profile-routes')

// When a request is made to the /users or /projects path, it will be directed to the index.js in the /users or /projects folder.
router.use('/users', userRoutes);
router.use('/profile', profileRoutes);


module.exports = router;

