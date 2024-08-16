const router = require('express').Router();


const { Likes, Reviews, Users } = require('../models');


// Route to render the search results page
router.get('/search-results', (req, res) => {
  res.render('partials/search-results');
});


// Route to fetch movie data
router.get('/movie', async (req, res) => {
    const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: 'Title parameter is required' });
  }

  const url = `https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.Response === 'False') {
      return res.status(404).json({ error: data.Error });
    }
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error('Fetch Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get("/api/likes", async (req, res) => {
  try {
    const likeData = await Likes.findAll({})
    res.json({ status: "success", payload: likeData })
    console.log(likeData)
  } catch(err){
    console.log(likeData)
    res.status(500).json({ status: "error", payload: err.message })
  }
});

router.get("/api/reviews", async (req, res) => {
  try {
    const reviewData = await Reviews.findAll({})
    res.json({ status: "success", payload: reviewData })
    console.log(reviewData)
  } catch(err){
    console.log(reviewData)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.post("/api/reviews", async (req, res) => {
  try {
    const dbReviewData = await Reviews.create(req.body)
    res.json({ status: "success", payload: dbReviewData })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})



// -------------------


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
