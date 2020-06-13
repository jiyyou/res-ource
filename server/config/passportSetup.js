const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

require('dotenv').config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

passport
	.use(new LinkedInStrategy({
		//options for the strategy
		clientID: CLIENT_ID,
		clientSecret: CLIENT_SECRET,
		callbackURL: '/auth/redirect'
	}, (accressToken, refreshToken, profile, done) => {
		//passport callback function
		console.log(profile);
	}))