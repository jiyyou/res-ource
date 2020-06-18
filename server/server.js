const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
const postsRoutes = require('./routes/postsRoutes');
const subRoutes = require('./routes/subRoutes')
const userRoutes = require('./routes/userRoutes');
const passportSetup = require('./config/passportSetup');

require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

//routes
app.use('/auth', authRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/sub', subRoutes);
app.use('/api/user', userRoutes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));