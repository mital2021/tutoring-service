const router = require('express').Router();

const userRoutes = require('./user-routes');
const tutorRoutes = require('./tutor-routes');

router.use('/users', userRoutes);
router.use('/tutors', tutorRoutes);

module.exports = router;
