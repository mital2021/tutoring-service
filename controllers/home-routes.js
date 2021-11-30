const router = require('express').Router();
const { Student, Tutor, Review } = require('../Models')
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Student.findOne({
    where: {
      id: req.session.user_id
    },
    attrubutes: {
      exclude: ["password"]
    }
  }).then(dbStudentData => {
    if(!dbStudentData) {
      res.status(404).json({message:'No user found with this id'})
      return;
    }

    const student = dbStudentData.get({plain:true});

    res.render('homePage', { 
      student, 
      loggedIn: req.session.loggedIn,
      studentLoggedIn: req.session.studentLoggedIn
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/create-account', (req, res) => {
  res.render('create-account');
});

module.exports = router;
