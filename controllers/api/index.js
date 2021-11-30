const router = require('express').Router();

const studentRoutes = require('./student-routes');
const tutorRoutes = require('./tutor-routes');

router.use('/students', studentRoutes);
router.use('/tutors', tutorRoutes);

module.exports = router;
