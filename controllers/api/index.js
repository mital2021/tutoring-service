const router = require('express').Router();

const studentRoutes = require('./student-routes');
const tutorRoutes = require('./tutor-routes');

router.use('/students', studentRoutes);
router.use('/tutors', tutorRoutes);

router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
      req.session.destroy(() =>{
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
