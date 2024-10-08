const router = require('express').Router();
const { Users } = require('../../models');

console.log("/api/login")


//Create a new user
// router.post('/login', async (req, res) => {
//   console.log("ignore me")
//   console.log(req.body)
//   try {
//     const userData = await Users.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

//TODO: this is breaking the login
// router.post('/login', async (req, res) => {
//   console.log("login route")
//   console.log(req.body)
//   try {
//     const userData = await Users.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post('/api/logout', async(req, res) => {
  console.log("logout route)")
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;