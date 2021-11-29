const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Tutor, User, Vote } = require('../../models');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Tutor.findAll({
    attributes: ['id', 'firstname', 'lastname','subject','hourlyrate', 'created_at',
    [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE tutor.id = vote.tutor_id)'), 'vote_count']
  ],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Tutor.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'firstname', 'lastname','subject','hourlyrate', 'created_at',
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

router.post('/', (req, res) => {
 
  Tutor.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    subject: req.body.subject,
    hourlyrate: req.body.hourlyrate,
    user_id: req.body.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

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

module.exports = router;
