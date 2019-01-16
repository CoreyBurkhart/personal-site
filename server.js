var express = require('express');
var morgan = require('morgan');
var chalk = require('chalk')
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

function log(str) {
  chalk.bold.green(str);
}

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, './assets')));

app.get('/', function(req, res) {
  res.render('index.ejs');
});


app.listen(PORT, function() {
  log(`Server listening on port ${PORT}`);
})