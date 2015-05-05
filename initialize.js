#! /usr/bin/env node

var fs = require('fs');
var Parse = require('cheerio');
var execSync = require('exec-sync');

var path = execSync("grep -l '/sites1/www.8x8.com/sites-ui/bower_components/q/q.js' $(grep -lr '<head>' --exclude-dir='sites-ui' /var/www/html/sites1/www.8x8.com) | head -n1")

while (path != '') {

if (path && path != '') {
  console.log(path)
  contents = fs.readFileSync(path, 'utf8').toString();
  $ = new Parse.load(contents);

/*
  $('head').append('<script src="/sites1/www.8x8.com/sites-ui/bower_components/ddp/ddp.js"></script>');
  $('head').append('<script src="/sites1/www.8x8.com/sites-ui/bower_components/q/q.js"></script>');
  $('head').append('<script src="/sites1/www.8x8.com/sites-ui/bower_components/asteroid/asteroid.chrome.js"></script>');
  $('head').append('<script src="/sites1/www.8x8.com/sites-ui/bower_components/jquery/dist/jquery.min.js"></script>');
  $('head').append('<script src="/sites1/www.8x8.com/sites-ui/bower_components/custom/custom.js"></script>');
*/

        $("script").each(function () {
//console.log(this)
            if ($(this).attr('src') == "/sites1/www.8x8.com/sites-ui/bower_components/ddp/ddp.js") {
                $(this).remove();
            }
            if ($(this).attr('src') == "/sites1/www.8x8.com/sites-ui/bower_components/q/q.js") {
                $(this).remove();
            }
            if ($(this).attr('src') == "/sites1/www.8x8.com/sites-ui/bower_components/asteroid/asteroid.chrome.js") {
                $(this).remove();
            }
            if ($(this).attr('src') == "/sites1/www.8x8.com/sites-ui/bower_components/jquery/jquery.min.js") {
                $(this).remove();
            }
            if ($(this).attr('src') == "/sites1/www.8x8.com/sites-ui/bower_components/custom/custom.js") {
                $(this).remove();
            }
        });


  fs.writeFileSync(path, $.html());

path = execSync("grep -l '/sites1/www.8x8.com/sites-ui/bower_components/q/q.js' $(grep -lr '<head>' --exclude-dir='sites-ui' /var/www/html/sites1/www.8x8.com) | head -n1")

}


}
