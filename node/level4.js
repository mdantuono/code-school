  var http = require('http');

  var myRequest = function(message) {
    var request = http.request('http://codeschool.com', function(response) {
      response.pipe(process.stdout, { end: false });
    });

    request.write(message);
    request.end();
  };

module.exports = myRequest;
//EXPORTING MODULES

var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};
  
module.exports.info = info;
module.exports.warn = warn;
module.exports.error = error;
//EXPORTING OBJECTS