const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
app.use(express.static('public'));

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(session({
  secret: 'yourSecret',
  resave: false,
  saveUninitialized: true
}));

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

module.exports = app;
