const express = require('express');
const session = require('express-session');
const app = express();
const cors = require('cors');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
const postsRoutes = require('./routes/postsRoutes');
const subRoutes = require('./routes/subRoutes')
const userRoutes = require('./routes/userRoutes');
const passportSetup = require('./config/passportSetup');
const fileupload = require('express-fileupload');

require('dotenv').config();
const port = process.env.PORT;

app.use(fileupload({
	useTempFiles: true
}));

app.use(cors({
	origin: true,
	credentials: true
}));
app.use(express.json());

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true
	})
);
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/auth', authRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/sub', subRoutes);
app.use('/api/user', userRoutes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));