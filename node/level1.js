var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.end("Hello, this is dog");
}).listen(8080);

//CREATING THE SERVER