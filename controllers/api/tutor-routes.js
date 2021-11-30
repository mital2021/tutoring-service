const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Tutor, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Tutor.findAll()
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
/*
router.get('/:id', (req, res) => {
  Tutor.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'firstname', 'lastname','subject','hourlyrate',
    [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE tutor.id = vote.tutor_id)'), 'vote_count']
  ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
*/
router.post('/', (req, res) => {
  Tutor.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/tutor-login', (req, res) => {

})
/*
router.put('/upvote', (req, res) => {
  // custom static method created in models/Post.js
  Tutor.upvote(req.body, { Vote, User })
    .then(updatedVoteData => res.json(updatedVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Tutor.update(
    {
      firstname: req.body.firstname
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Tutor.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
*/
module.exports = router;
