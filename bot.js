var argv = require( 'argv' );
var twit = require('twit');
var config = require('./config.js');
var fs = require('fs');
var util = require('util');
var complement = process.argv[2]

var Twitter = new twit(config);
var i = 0;

var date_now = new Date().getHours().toString()+' - ' + new Date().getMinutes().toString();


var twiteando = function() {
  text = 'hello world este número: ' + complement +'  #ujuEjtaPruebaDeSTRESSSSSyujuuuu';
  console.log("Posteando: "+ text);
  Twitter.post('statuses/update', { status: text }, function(err, data, response) {
    console.log(data);
    fs.appendFileSync('miconsola.txt', util.inspect(data) , 'utf-8');
    i++
    if(i < 15){
      twiteando()
    }
  })
}

while (true)
{
  //if (date_now === '12 - 25' ){
  if (true ){
    twiteando();
    break;
  }
  break;
}

