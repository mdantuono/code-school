var express = require('express');
var app = express();
var cities = ["Providence",
              "Miami",
              "San Diego"];

app.use(express.static('public'));

app.get('/cities', function(request, response) {
    response.send(cities);
});
app.get('/cities', function(request, response) {
   response.send(["Providence", "San Diego", "Miami"]); 
});
app.listen(process.env.PORT, function() {
    console.log("Listening on port FUCKYOU");
});