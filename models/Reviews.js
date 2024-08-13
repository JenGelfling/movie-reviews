const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}

Reviews.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
    },
    like: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'movie',
          key: 'id'
        }
    },
    is_public: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    } 
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'reviews'
  }
);

module.exports = Reviews;