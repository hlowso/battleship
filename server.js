// *---------*
// | MODULES |
// *---------*

// Server stuff
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Gameplay
const Game = require('./source/game.js');

// *-----------*
// | EXECUTION |
// *-----------*

const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('login');
});

app.post('/', (req, res) => {
  res.render('home', { username: req.body.username });
});

app.get('/play', (req, res) => {
  res.render('play');
});

app.listen(PORT, () => {
  console.log(`Battleship app listening on port ${PORT}`);
});