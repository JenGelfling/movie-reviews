const router = require('express').Router();
const { NeedClass1, NeedClass2 } = require('../models');

router.get('/', async (req, res) => {
    try {
      const dbMovieData = await Movie.findAll({
        include: [
          {
            model: Movie,
            attributes: ['title', 'poster'], //might need to add the year as well
          },
        ],
      });
  
      const movies = dbMovieData.map((movie) =>
        movie.get({ plain: true })
      );
      res.render('homepage', {movies});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });




router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });


  module.exports = router;