const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const User = require('../model/user');

require('dotenv').config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

passport.serializeUser((user, done) => {
	done(null, user.linkedInId);
});

passport.deserializeUser((id, done) => {
	User.where('linkedInId', id)
		.fetch()
		.then(user => {
			done(null, user.linkedInId);		
		});
})

passport
	.use(new LinkedInStrategy({
		//options for the strategy
		clientID: CLIENT_ID,
		clientSecret: CLIENT_SECRET,
		callbackURL: '/auth/redirect'
	}, (accressToken, refreshToken, profile, done) => {
		//passport callback function
		User.where('linkedInId', profile.id)
			.fetch()
			.then(currentUser => {
				done(null, currentUser);
			})
			.catch(() => {
				new User({
					fName: profile.name.givenName,
					lName: profile.name.familyName,
					linkedInId: profile.id
				})
					.save()
					.then(newUser => {
						console.log(newUser);
						done(null, newUser);
					})
			})
	}))