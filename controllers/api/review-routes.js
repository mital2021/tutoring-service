const router = require('express').Router();
const { Student , Tutor , Review } = require('../../models');

router.get('/', (req, res) => {
    Review.findAll()
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


router.post('/', (req, res) => {
    Review.create({
        review: req.body.review,
        emoji: req.body.emoji,
        stars: req.body.stars,
        student_id: req.session.user_id,
        tutor_id: req.body.tutor_id
    }).then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

module.exports = router;