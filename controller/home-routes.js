const router = require('express').Router();
const { Movies, Reviews, Users } = require('../models');

//to display a set group of current movies, I could create an array of objects here in to make it be consistent 

router.get('/movie/:num', async (req,res) => {
    const idx = parseInt(req.params.num) -1;
    console.log(idx);
    const moviesToRender= movies[idx]
    console.log(moviesToRender);
    res.render('dish', dishToRender)
  })

  router.get('/', async (req, res) => {
    try {
      const dbGalleryData = await Gallery.findAll({
        include: [
          {
            model: Painting,
            attributes: ['filename', 'description'],
          },
        ],
      });
  
      const galleries = dbGalleryData.map((gallery) =>
        gallery.get({ plain: true })
      );
      res.render('homepage', {
        galleries,
        loggedIn: req.session.loggedIn,
      });
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