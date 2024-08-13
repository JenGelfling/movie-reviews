const router = require('express').Router();
const { Movie, Reviews, User } = require('../models');







//to display a set group of current movies, I could create an array of objects here in to make it be consistent. Also probably not functional yet 



router.get('/', async (req, res) => {
    try {
      const dbMovieData = await Movie.findAll({
        include: [
          {
            model: Movie,
            attributes: ['title', 'poster'], //update later
          },
        ],
      });
  
      const movies = dbMovieData.map((movie) =>
        movie.get({ plain: true })
      );
      res.render('homepage', {movies,});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //to display a set group of current movies, I could create an array of objects here in to make it be consistent. Also probably not functional yet 
  router.get('/movie/:num', async (req,res) => {
    const idx = parseInt(req.params.num) -1;
    console.log(idx);
    const movieToRender= Movie[idx]
    console.log(movieToRender);
    res.render('movie', movieToRender)
  });

//same but for x amount of reviews on the page
  router.get('/', async (req, res) => {
    try {
      const dbReviewData = await Reviews.findAll({
        include: [
          {
            model: Reviews,
            attributes: ['title', 'description'], //likely should add a description or similar field into the Reviews model
          },
        ],
      });
  
      const reviews = dbReviewData.map((review) =>
        review.get({ plain: true })
      );
      res.render('homepage', {reviews,});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //to display a set group of current movies, I could create an array of objects here in to make it be consistent. Also probably not functional yet 
  router.get('/review/:num', async (req,res) => {
    const idx = parseInt(req.params.num) -1;
    console.log(idx);
    const reviewToRender= Reviews[idx]
    console.log(reviewToRender);
    res.render('review', reviewToRender)
  });


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });


  module.exports = router;