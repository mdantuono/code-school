var express = require('express');
var app = express();
var cities = ["Providence", "Miami", "San Diego"];

app.get('/', function(request, response) {
    response.send('Hello world');
});
app.get('/name', function(request, response) {
    response.send("Michael DAntuono");
});
app.get('/redirect', function(request, response) {
    response.redirect(301, '/surprise');
});
app.get('/surprise', function(request, response) {
    response.send("Get redirected!");
});
app.get('/date', function(request, response) {
   response.send(new Date());
});
app.get('/cities', function(request, response) {
    response.send(cities);
});
app.use();

app.listen(process.env.PORT, function() {
    console.log("Listening on port 3000");
});