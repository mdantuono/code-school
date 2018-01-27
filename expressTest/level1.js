var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello world');
});
app.get('/name', function(request, response) {
    response.send("Michael DAntuono");
});
app.get('/redirect', function(request, response) {
    
});
app.get('/date', function(request, response) {
   response.send(Date.now());
});

app.listen(process.env.PORT, function() {
    console.log("Listening on port 3000");
});