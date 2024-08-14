const router = require('express').Router();


const { Likes, Reviews, Users } = require('../models');
















//to display a set group of current movies, I could create an array of objects here in to make it be consistent. Also probably not functional yet




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




 




  //to display a set group of current movies, I could create an array of objects here in to make it be consistent. Also probably not functional yet
//   router.get('/movie/:num', async (req,res) => {
//     const idx = parseInt(req.params.num) -1;
//     console.log(idx);
//     const movieToRender= Movie[idx]
//     console.log(movieToRender);
//     res.render('movie', movieToRender)
//   });




// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
//     res.render('login');
//   });




  module.exports = router;
