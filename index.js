var express = require('express.io');
var app = express(),
	mustacheExpress = require('mustache-express');
app.http().io();

app.set('port', (process.env.PORT || 5000));

app.engine('html', mustacheExpress());          // register file extension mustache
app.set('view engine', 'html');                 // register file extension for partials
app.set('views', __dirname + '/html');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	response.render('index', {
		title: 'Live tweets for #Twitter'
    });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});


var Twit = require('twit')
var T = new Twit({
    consumer_key:         'consumer_key'
  , consumer_secret:      'consumer_secret'
  , access_token:         'access_token'
  , access_token_secret:  'access_token_secret'
})

var stream = T.stream('statuses/filter', { track: '#Twitter', language: 'en' })
stream.on('tweet', function (tweet) {
	app.io.broadcast('new tweet', {tweet_data: tweet});
})