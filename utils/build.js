/**
 * utils/build.js
 * 
 * Convert ejs pages to static html files for deployment to Github pages
 */

var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var ejs = require('ejs');

var viewsDir = path.resolve(__dirname, '../views');
var indexEjsPath = path.join(viewsDir, 'index.ejs');
var disclaimer = `<!-- 
This file is generated by a script. See utils/build.js for build details. 
-->`

function log(str) {
  console.info(chalk.bold.blue(`utils/build.js: ${str}`));
}

// create index.html file
log(`reading ${indexEjsPath}...`)
fs.readFile(indexEjsPath, 'utf-8', (err, ejsData) => {
  if(err) throw err;
  log(`transpiling ${indexEjsPath}...`)
  
  const html = ejs.render(ejsData, {
    filename: indexEjsPath
  });

  fs.writeFile('index.html', `${disclaimer}\n${html}`, (err) => {
    if(err) throw err;
    log('done!');
  })
})
