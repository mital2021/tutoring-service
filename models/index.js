// import all models
const Tutor = require('./Tutor');
const User = require('./User');
const Vote = require('./Vote');

// create associations
User.hasMany(Tutor, {
    foreignKey: 'user_id'
  });
  
  Tutor.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  User.belongsToMany(Tutor, {
    through: Vote,
    as: 'voted_tutors',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Tutor.belongsToMany(User, {
  through: Vote,
  as: 'voted_tutors',
  foreignKey: 'tutor_id',
    onDelete: 'SET NULL'
  });
  
  Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Vote.belongsTo(Tutor, {
    foreignKey: 'tutor_id',
    onDelete: 'SET NULL'
  });
  

  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Tutor.hasMany(Vote, {
    foreignKey: 'tutor_id'
  });

  
  module.exports = { User, Tutor,Vote};