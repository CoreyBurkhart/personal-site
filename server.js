var express = require('express');
var morgan = require('morgan');
var chalk = require('chalk')
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;
var pagesPath = path.join(__dirname, 'views/pages');
var indexPath = path.join(__dirname, 'views/index.ejs');

function log(str) {
  chalk.bold.green(str);
}

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use('/assets', express.static(path.resolve(__dirname, './assets')));

app.get('/', function(req, res) {
  res.render(indexPath);
});

app.get(/section/, function(req, res) {
  const fileName = req.path.replace('section', pagesPath)
    .replace('.html','.ejs');

  res.render(fileName);
})


app.listen(PORT, function() {
  log(`Server listening on port ${PORT}`);
})