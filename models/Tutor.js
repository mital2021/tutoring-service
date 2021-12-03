const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our Post model
class Tutor extends Model {
  // static upvote(body, models) {
  //   return models.Vote.create({
  //     user_id: body.user_id,
  //     tutor_id: body.tutor_id
  //   }).then(() => {
  //     return Tutor.findOne({
  //       where: {
  //         id: body.tutor_id
  //       },
  //       attributes: [
  //         'id',
  //         'firstname',
  //         'lastname',
  //         'subject',
  //         'hourlyrate',
          
  //         [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE tutor.id = vote.tutor_id)'), 'vote_count']
  //       ],
  //       include: [
  //         {
  //           model: models.Comment,
  //           attributes: ['id','tutor_id', 'user_id'],
  //           include: {
  //             model: models.User,
  //             attributes: ['username']
  //           }
  //         }
  //       ]
  //     });
  //   });
  // }
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
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    subject: {
      type: DataTypes.STRING
    },
    hourly_rate: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    interest: {
      type: DataTypes.STRING
    },
    career: {
      type: DataTypes.STRING
    }
  },
  {
    hooks: {
      async beforeCreate(newTutorData) {
        newTutorData.password = await bcrypt.hash(newTutorData.password, 10);
        return newTutorData;
      },
      async beforeUpdate(updatedTutorData) {
        updatedTutorData.password = await bcrypt.hash(updatedTutorData.password, 10);
        return updatedTutorData
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutor'
  }
);

module.exports = Tutor;
