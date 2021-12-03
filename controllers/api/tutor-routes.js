const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Student , Tutor , Review } = require('../../models');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Tutor.findAll({
    include: [
      {
        model: Review,
        attributes: ['id', 'review', 'emoji', 'stars'],
        include: [
          {
            model: Student,
            attributes: ['first_name', 'last_name']
          }
        ]
      }
    ]
   })
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

router.post('/login', (req, res) => {
  Tutor.findOne({
    where:{
        email: req.body.email
    }
  }).then(dbTutorData =>{
    if (!dbTutorData) {
      res.status(400).json({message:'No tutor with that email address!'});
      return;
    }

    //console.log(dbTutorData.checkPassword(req.body.password))
    //const validPassword = dbTutorData.checkPassword(req.body.password);

    // if(!validPassword) {
    //   res.status(400).json({ message:'Incorrect password!'});
    //   return;
    // }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbTutorData.id;
      req.session.first_name = dbTutorData.first_name;
      req.session.last_name = dbTutorData.last_name;
      req.session.loggedIn = true;
      req.session.tutorLoggedIn = true;

      res.json({ user: dbTutorData, message: 'You are now logged in!' }); 
    });
  });
})

router.put('/:id', (req, res) => {
  Tutor.update(
    {
      subject: req.body.subject,
      hourly_rate: req.body.hourly_rate,
      description: req.body.description,
      interest: req.body.interest,
      career: req.body.career
    },
    {
      where: {
      id: req.session.user_id
      }
    }
  )
  .then((dbTutorData) => {
    if (!dbTutorData) {
      res.status(404).json({ message: "No Tutor found with this id" });
      return;
    }
    res.json(dbTutorData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
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
