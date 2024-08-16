const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const { Users } = require('../models');


router.use('/api', apiRoutes);

router.post("/api/login", async(req, res) => {

    console.log("HERE DAMMIT")
    
    res.json({ status: "ok" })
})


router.post("/api/users", async (req, res) => {
  console.log("body", req.body)
  try {
    const userData = await Users.create(req.body);
    console.log(userData)

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }

  // console.log("HERE DAMMIT")
  
  // res.json({ status: "ok" })
})





router.use('/', homeRoutes);



module.exports = router;