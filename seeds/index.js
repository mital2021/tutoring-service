
const seedUser = require('./User-seeds');
const seedTutors = require('./Tutor-seeds');
const seedVotes = require('./Vote-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedTutors();
  console.log('\n----- TUTORS SEEDED -----\n');

  await seedVotes();
  console.log('\n----- VOTES SEEDED -----\n');

  process.exit(0);
};

seedAll();