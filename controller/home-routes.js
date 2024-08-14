const router = require('express').Router();
const { Like, Reviews, User } = require('../models');







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



// router.get('/', async (req, res) => {
//     try {
//       const dbMovieData = await Movie.findAll({});
//       const movies = dbMovieData.map((movie) =>
//         movie.get({ plain: true })
//       );
//       console.log()
//       res.render('homepage', {movies});
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });


  router.get('/', async (req, res) => {
    try {
      const dbLikesData = await Movie.findAll({});
      const likes = dbLikesData.map((like) =>
        like.get({ plain: true })
      );
      console.log(likes)
      res.render('homepage', {likes});
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


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });


  module.exports = router;