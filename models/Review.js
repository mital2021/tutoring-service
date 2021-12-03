const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    review: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emoji: {
        type: DataTypes.STRING,
    },
    stars: {
        type: DataTypes.INTEGER,
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'student',
        key: 'id'
      }
    },
    tutor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tutor',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
  }
);

module.exports = Review;
