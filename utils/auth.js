const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/introduction');
    } else {
        next();
    }
};

const withDash = (req, res, next) => {
    if (!req.session.tutorLoggedIn) {
        res.redirect('/')
    } else {
        next();
    }
}

const withLoggedIn = (req, res, next) => {
    if (req.session.loggedIn) {
        res.redirect('/')
    } else {
        next();
    }
}
  
module.exports = { withAuth, withDash, withLoggedIn };