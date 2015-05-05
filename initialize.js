#! /usr/bin/env node

var fs = require('fs');
var Parse = require('cheerio');
var execSync = require('exec-sync');
var sitepath = '/sites1/www1.phone.com'
//var sitepath = ''
var scriptpath = sitepath + "/sites-ui/bower_components/jquery/dist/jquery.min.js"
// 1 for adding, 0 for removing
var addremove = 1
//console.log(scriptpath)

if (addremove) {
  adding = 'L'
} else {
  adding = 'l'
}

var path = execSync("grep -" + adding + " " + scriptpath + " $(grep -lr '<head>' --exclude-dir='sites-ui' /var/www/html/sites1/www1.phone.com) | head -n1")
//console.log(path)

while (path != '') {

if (path && path != '') {
  console.log(path)
  contents = fs.readFileSync(path, 'utf8').toString();
  $ = new Parse.load(contents);

if (addremove == 1) {
  $('head').append('<script src="' + sitepath + '/sites-ui/bower_components/ddp.js/src/ddp.js"></script>');
  $('head').append('<script src="' + sitepath + '/sites-ui/bower_components/q/q.js"></script>');
  $('head').append('<script src="' + sitepath + '/sites-ui/bower_components/asteroid/dist/asteroid.chrome.js"></script>');
  $('head').append('<script src="' + sitepath + '/sites-ui/bower_components/jquery/dist/jquery.min.js"></script>');
  $('head').append('<script src="' + sitepath + '/sites-ui/custom/custom.js"></script>');
} else {

        $("script").each(function () {
//console.log(this)
            if ($(this).attr('src') == sitepath + "/sites-ui/bower_components/ddp/ddp.js") {
                $(this).remove();
            }
            if ($(this).attr('src') == sitepath + "/sites-ui/bower_components/q/q.js") {
                $(this).remove();
            }
            if ($(this).attr('src') == sitepath + "/sites-ui/bower_components/asteroid/dist/asteroid.chrome.js") {
                $(this).remove();
            }
            if ($(this).attr('src') == sitepath + "/sites-ui/bower_components/jquery/dist/jquery.min.js") {
                $(this).remove();
            }
            if ($(this).attr('src') == sitepath + "/sites-ui/custom/custom.js") {
                $(this).remove();
            }
            if ($(this).attr('src') == "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js?ver=1.11.0") {
                $(this).remove();
            }
        });
}

  fs.writeFileSync(path, $.html());

path = execSync("grep -" + adding + " " + scriptpath  + " $(grep -lr '<head>' --exclude-dir='sites-ui' /var/www/html/sites1/www1.phone.com) | head -n1")
if (path == '' && addremove == 1) {
  console.log('added all')
} else if (path == '' && addremove == 0) {
  console.log('removed all')
}
}


}
