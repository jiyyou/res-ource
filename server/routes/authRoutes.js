const express = require('express');
const router = express.Router();
const passport = require('passport');


//auth logout
router.get('/logout', (req, res) => {
	//handle with passport
	res.send('logging out');
});

//auth with LinkedIn
router.get('/', passport.authenticate('linkedin', {
	scope: ['r_emailaddress', 'r_liteprofile']
}));

//callback route for LinkedIn to redirect to 
router.get('/redirect', passport.authenticate('linkedin'), (req, res) => {
	res.send('you reached the callback URI');
})

module.exports = router;