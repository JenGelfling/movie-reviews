
const userdata = [
    { username: 'Johnson', email: 'jjohnson@gmail.com', password: 'jjohnson' },
    { username: 'Smith', email: 'msmith@gmail.com', password: 'msmith' },
    { username: 'Henderson', email: 'ahenderson@gmail.com', password: 'ahenderson' },
    { username: 'Courson', email: 'rcourson@gmail.com', password: 'rcourson' }
  ]

const reviewdata = [
  {
    "title": "Inception",
    "author_id": 1,
    "content": "this was great!",
    "like_id": "1",
    "is_public": "true"
}
]

const likedata = [
  { likes: 1 },
  { likes: 4 }
]


// const moviedata = [
//     { title: 'Furiosa: A Mad Max Saga', year: '2024', director: 'George Miller', rated: 'R', released: '24 May 2024', runtime: '148 min', genre: 'Action, Adventure, Sci-Fi', actors: 'Anya Taylor-Joy, Chris Hemsworth, Tom Burke', plot: 'The origin story of renegade warrior Furiosa before her encounter and teamup with Mad Max.', language: 'English', poster: 'https://m.media-amazon.com/images/M/MV5BNDRkNGNjNzMtYzE3MS00OWQyLTkzZGUtNWIyMmYwMjY3YzYxXkEyXkFqcGc@._V1_SX300.jpg', imdbRating: '7.7', boxoffice: '$67,260,980'  }
//   ]
  
  module.exports = { userdata, likedata, reviewdata }