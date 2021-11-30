const router = require('express').Router();
const { Student, Tutor, Review } = require('../Models')
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Tutor.findAll().then(dbTutorData => {
    if(!dbTutorData) {
      res.status(404).json({message:'No user found with this id'})
      return;
    }
  
    const tutors = dbTutorData.map(tutor => tutor.get({ plain: true }));
  
    res.render('home-page', { 
      tutors, 
      loggedIn: req.session.loggedIn,
      studentLoggedIn: req.session.studentLoggedIn,
      tutorLoggedIn: req.session.tutorLoggedIn
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  })
})

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/create-account', (req, res) => {
  res.render('create-account');
});

router.get('/profile/:id', (req, res) => {
  Tutor.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbTutorData => {
    if(!dbTutorData) {
      res.status(404).json({message:'No tutor found with this id.'});
    }

    const tutor = dbTutorData.get({plain:true});

    res.render('tutor-profile', {
      tutor,
      loggedIn: req.session.loggedIn,
      studentLoggedIn: req.session.studentLoggedIn,
      tutorLoggedIn: req.session.tutorLoggedIn
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
});

module.exports = router;
