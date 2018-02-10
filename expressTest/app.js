var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

var cities = {
    "Providence":"Rhode Island",
    "Miami":"Florida",
    "San Diego":"California",
    "Philidelphia":"Pennsylvania",
    "Chicago":"Illinois"
    
};

app.post('/cities', parseUrlencoded, function(request, response) {
    var newCity = request.body;
    cities[newCity.name] = newCity.description;
    
    response.status(201).json(newCity.name);
});

app.use(express.static('public'));

app.get('/cities', function(request, response) {
    // var state = cities[request.params.state];
    // if (!state) {
    //     response.status(404).json('No state found for ' + request.params.state);
    // } else {
    // response.json(state);
    // }
    
    if (request.query.limit >= 0) {
        response.json(cities.slice(0, request.query.limit));
    } else if (request.query.limit > cities.length) {
        response.status(400).json('Requested limit too large');
    } else {
        response.send(cities);
    }
});
app.param('place', function(request, response, next) {
    var place = app.params.place;
    var city = place[0].toUpperCase() + place.slice(1).toLowerCase();
    
    request.cityName = city;
    next();
});

app.listen(process.env.PORT, function() {
    console.log("Listening on port 3000");
});