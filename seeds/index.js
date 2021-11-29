const seedUsers = require('./user-seeds');
const seedTutors = require('./tutor-seeds');
const seedVotes = require('./vote-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedTutors();
  console.log('--------------');

  await seedVotes();
  console.log('--------------');


  process.exit(0);
};

seedAll();
