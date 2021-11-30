const router = require('express').Router();

const userRoutes = require('./user-routes');
const tutorRoutes = require('./tutor-routes');
const homeRoutes = require('./home-routes.js');
const controllers = require('./controllers/'); 

router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/tutors', tutorRoutes);

module.exports = router;
