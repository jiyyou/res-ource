const express = require('express');
const router = express.Router();
const passport = require('passport');

//auth with LinkedIn
router.get('/', passport.authenticate('linkedin', {
	scope: ['r_emailaddress', 'r_liteprofile']
}));

//callback route for LinkedIn to redirect to 
router.get('/redirect', passport.authenticate('linkedin'), (req, res) => {
	res.redirect('https://res-ource.herokuapp.com/');
})

router.get('/check-auth', (req, res) => {
	if (req.user === undefined) return res.status(401).send('Unauthorized');
	res.status(200).json(req.user);
})

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('https://res-ource.herokuapp.com/');
})

module.exports = router;