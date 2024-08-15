const router = require('express').Router();


const { Likes, Reviews, Users } = require('../models');


router.get("/api/users", async (req, res) => {
  try {
    const userData = await Users.findAll({})
    res.json({ status: "success", payload: userData })
    console.log(userData)
  } catch(err){
    console.log(userData)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.get('/', async (req, res) => {
    try {
      const dbReviewData = await Reviews.findAll({});
      const reviews = dbReviewData.map((review) =>
        review.get({ plain: true })
      );
      console.log(reviews)
      res.render('homepage', {reviews});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  router.get('/reviews/:id', async (req, res) => {
    try {
      const dbReviewData = await Reviews.findByPk(req.params.id, {
        include: [{model: Reviews,
            attributes: [
              'id',
              'title',
              'author_id',
              'like_id',
              'is_public',
            ],
          },
        ],
      });
 
      const review = dbReviewData.get({ plain: true });
      res.render('reviews', { review });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      const dbLikesData = await Likes.findAll({});
      const likes = dbLikesData.map((like) =>
        like.get({ plain: true })
      );
      console.log(likes)
      res.render('homepage', {reviews});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/profile', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/profile');
      return;
    }
    res.render('profile');
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
  });




  module.exports = router;
