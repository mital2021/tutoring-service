// import all models
const Tutor = require('./Tutor');
const User = require('./User');

// create associations
User.hasMany(Tutor, {
    foreignKey: 'user_id'
  });
  
  Tutor.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  User.belongsToMany(Tutor, {
    through:"",
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Tutor.belongsToMany(User, {
  through:"",
  foreignKey: 'tutor_id',
    onDelete: 'SET NULL'
  });
  
  
  
  module.exports = { User, Tutor};