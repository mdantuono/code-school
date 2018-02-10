var express = require('express');
var app = express();
var cities = {"Providence":"Rhode Island",
              "Miami":"Florida",
              "San Diego":"California",
              "Philidelphia":"Pennsylvania",
              "Chicago":"Illinois"};

app.use(express.static('public'));

app.get('/cities', function(request, response) {
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