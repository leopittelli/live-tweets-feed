Live tweets feed example
========================

Tweets feed auto update using Twitter Streaming API and node.js
Super simple demo of a #hashtag streaming via socket.

Demo
----
You can see live tweets for #twitter here: [Heroku example](live-tweets-feed.herokuapp.com)
Visit the link and wait until someone publish a tweet using hashtag #twitter.

Requirements
--------
* [node.js](http://nodejs.org/)

Installation
------------
```sh
$ git clone https://github.com/leopittelli/live-tweets-feed.git
$ npm install
$ npm start
```

Dependencies
------------
Its built based on:
* Twitter API Client for node [twit](https://github.com/ttezel/twit)
* Realtime-web framework for node.js [express.io](https://github.com/techpines/express.io)
* Just for playing, integrated template system. [mustache-express](https://github.com/bryanburgers/node-mustache-express)

Deployment
----------
* It's prepared to run on heroku (I started from the heroku sample application). You can follow the (node.js getting started)[https://devcenter.heroku.com/articles/getting-started-with-nodejs]