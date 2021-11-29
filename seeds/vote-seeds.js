const { Vote } = require('../models');

const votedata = [
  {
    user_id: 9,
    post_id: 19
  },
  {
    user_id: 1,
    post_id: 8
  },
  {
    user_id: 8,
    post_id: 12
  },
  {
    user_id: 8,
    post_id: 19
  },
  {
    user_id: 9,
    post_id: 3
  },
  {
    user_id: 3,
    post_id: 16
  },
  {
    user_id: 4,
    post_id: 7
  },
  {
    user_id: 10,
    post_id: 7
  },
  {
    user_id: 3,
    post_id: 18
  },
  {
    user_id: 9,
    post_id: 16
  },
  {
    user_id: 3,
    post_id: 17
  },

];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
