var url = require('url');
var request = require('request');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);

var app; // Create server here
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  request(searchURL).pipe(res);
});

app.listen(8080);

//ISSUING A GET REQUEST TO TWITTER AND PIPE TO RESPONSE