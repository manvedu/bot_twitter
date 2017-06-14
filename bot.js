var twit = require('twit');
var config = require('./config.js');
var fs = require('fs');
var util = require('util');

var Twitter = new twit(config);
var i = 0;

var date_now = new Date().getHours().toString()+' - ' + new Date().getMinutes().toString();


var twiteando = function() {
console.log("ejto je fue");
/*
  text = 'hello world este número: ' + i + '  #ujuEjtaPruebaDeSTRESSSSSyujuuuu';
  Twitter.post('statuses/update', { status: text }, function(err, data, response) {
    console.log(data);
    fs.appendFileSync('miconsola.txt', util.inspect(data) , 'utf-8');
    i++
    if(i<5){
      twiteando()
    }
  })
*/
}

while (true)
{
  if (date_now === '16 - 37' ){
    twiteando();
    break;
  }
  break;
}

