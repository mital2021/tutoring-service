const router = require('express').Router();
const { Student , Tutor , Review } = require('../../models');

// get all users
router.get('/', (req, res) => {
  Student.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
/*
router.get('/:id', (req, res) => {
  Student.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Tutor,
        attributes: ['id', 'firstname', 'lastname','subject','hourlyrate', 'created_at']
      },

      {
        model: Tutor,
        attributes: ['firstname'],
        through: Vote,
        as: 'voted_tutors'
      }

    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
*/
router.post('/', (req, res) => {
  Student.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbStudentData => res.json(dbStudentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  Student.findOne({
    where:{
        email: req.body.email
    }
  }).then(dbStudentData =>{
    if (!dbStudentData) {
      res.status(400).json({message:'No student with that email address!'});
      return;
    }

    const validPassword = dbStudentData.checkPassword(req.body.password);

    if(!validPassword) {
      res.status(400).json({ message:'Incorrect password!'});
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbStudentData.id;
      req.session.first_name = dbStudentData.first_name;
      req.session.last_name = dbStudentData.last_name;
      req.session.loggedIn = true;
      req.session.studentLoggedIn = true;
 
      res.json({ user: dbStudentData, message: 'You are now logged in!' }); 
    });
  });
});

/*
router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  Student.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Student.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
*/
module.exports = router;