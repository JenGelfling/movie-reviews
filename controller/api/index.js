// Import just the router express
const router = require('express').Router();



const profileRoutes= require('./profile-routes')
const loginRoutes = require('./signin-routes.js')
const reviewRoutes= require('./review-routes')
const likesRoutes= require('./likes-routes')
const usersRoutes= require('./users-routes')

//When a request is made to the /users or /projects path, it will be directed to the index.js in the /users or /projects folder.

router.use('/profile', profileRoutes);
router.use('/signin', loginRoutes);
router.use('/reviews', reviewRoutes);
router.use('/likes', likesRoutes);
router.use('/users', usersRoutes); 

module.exports = router;

