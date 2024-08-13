
const User = require('./User');
const Reviews = require('./Reviews');
const Movie = require('./Movies');

// A movie can have many reviews
Movie.hasMany(Reviews, {
  foreignKey: 'movie_id',
  onDelete: 'CASCADE'
});

// A review belongs to one movie
Reviews.belongsTo(Movie, {
  foreignKey: 'movie_id'
});

// A review belongs to one user
Reviews.belongsTo(User, {
  foreignKey: 'author_id'
});

// A user can have many reviews
User.hasMany(Reviews, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Reviews, Movie };