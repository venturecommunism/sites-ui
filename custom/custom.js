$(document).ready(function() {

status = 'pending'
context = 'icons'

//random cleanup should go someplace
//setTimeout(function() {$('#simplemodal-container').remove()}, 1500)
//setTimeout(function() {$('#simplemodal-overlay').remove()}, 1500)

$('<div id="footer123" style="position: absolute; left: 0; bottom: 0; width: 100%; height: 230px; z-index: 3; background-color: #ED1820; position: fixed;"><img id="activeimage123" src="/pone.com/images/33572f85.png"></img><div id="icons" class="context context-active" style="float: right; width: 50px; height: 50px">icons</div></div>').appendTo('.content-info'); 

console.log('yoyoyo123')

/*
	jQuery-GetPath v0.01, by Dave Cardwell. (2007-04-27)
	
	http://davecardwell.co.uk/javascript/jquery/plugins/jquery-getpath/
	
	Copyright (c)2007 Dave Cardwell. All rights reserved.
	Released under the MIT License.
	
	
	Usage:
	var path = $('#foo').getPath();

*/

jQuery.fn.extend({
    getPath: function() {
    var rightArrowParents = [];
    $(this).parents().not('html').each(function() {
        var entry = this.tagName.toLowerCase();
        if (this.className) {
            entry += "." + this.className.replace(/ /g, '.');
        }
        rightArrowParents.push(entry);
    });
    rightArrowParents.reverse();
    return rightArrowParents.join(" ");
  }
});

if (context == 'icons' && status == 'completed') {
$('img').click(function() {
console.log('clicked')
  newimage = $('#activeimage123')[0].src
  uniqueselector = $(this).getPath();
var ceres = new Asteroid('166.78.114.243:3000');
ceres.subscribe("tasksPublication");
var taskspending = ceres.getCollection("taskspending");

var method = 'img'
var url = window.location.href
var uniqueselector = uniqueselector
var newimage = newimage
var context = 'icons'
var status = 'completed'

var thingie = ceres.call(method, url, uniqueselector, newimage, context, status)

console.log(thingie.result)

}) //img click: newimage
}
else if (context == 'icons' && status == 'pending') {

$('img').click(function() {
  oldimage = $(this).attr('src')
console.log(oldimage)
  uniqueselector = $(this).getPath();
var ceres = new Asteroid('166.78.114.243:3000');
ceres.subscribe("tasksPublication");
var taskspending = ceres.getCollection("taskspending");

var method = 'img'
var url = window.location.href
var uniqueselector = uniqueselector
var oldimage = oldimage
var context = 'icons'
var status = 'pending'

var thingie = ceres.call(method, url, uniqueselector, oldimage, context, status)

console.log(thingie.result)

}) //img click: oldimage


}
}) //document ready
