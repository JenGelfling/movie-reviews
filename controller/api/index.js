// Import just the router express
const router = require('express').Router();
// Import the index.js from 'api' folder
const apiRoutes = require('./api');

// When a request is made to the /api route, it will be directed to the index.js in the 'api' folder.
router.use('/api', apiRoutes);

//page routes go here
router.get("/", (req,res) => {
    res.render('homepage', {update: {}})
    //do a sequelize query for the stated variable (needs to be updated), send that data into the template
})

router.get("/login", (req,res) => {
    res.render('login')
})

router.get("/about", (req,res) => {
    res.render('about')
})

router.get("/profile", (req,res) => {
    res.render('profile', {user: req.session.user || {}})
    //all the info about the logged in user was paced intp req.session when the user logged in

    const userID= req.session.user_id
    console.log(userID)
})

router.get("/search", (req,res) => {
    res.render('search')
})


module.exports = router;

