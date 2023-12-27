const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const surveyRoutes = require('./routes/surveyRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
const port = 8000;
const { db } = require('./config/mongoose');
db();
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', surveyRoutes);
// app.use('/api', authRoutes);

app.listen(port, () => console.log(`Yeh! app listening on port ${port}!`))