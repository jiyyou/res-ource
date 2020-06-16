const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
const postsRoutes = require('./routes/postsRoutes');
const subRoutes = require('./routes/subRoutes')
const passportSetup = require('./config/passportSetup');

require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

//routes
app.use('/auth', authRoutes);
app.use('/comments', commentsRoutes);
app.use('/posts', postsRoutes);
app.use('/sub', subRoutes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));