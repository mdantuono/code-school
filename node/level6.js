  var server = io.connect('http://localhost:8080');

  server.on('question', function(question) {
    insertQuestion(question);
  });
  server.on('answer', function(question, answer) {
    answerQuestion(question, answer);
  }); 
