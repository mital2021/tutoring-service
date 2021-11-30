const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Tutor extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      tutor_id: body.tutor_id
    }).then(() => {
      return Tutor.findOne({
        where: {
          id: body.tutor_id
        },
        attributes: [
          'id',
          'firstname',
          'lastname',
          'subject',
          'hourlyrate',
          
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE tutor.id = vote.tutor_id)'), 'vote_count']
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id','tutor_id', 'user_id'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}



// create fields/columns for Tutor model
Tutor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hourlyrate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutor'
  }
);

module.exports = Tutor;
