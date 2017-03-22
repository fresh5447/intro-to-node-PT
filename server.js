var http = require('http');

http.createServer(function(request, response){
  response.end('hello, world!');
  console.log("You server is running on port 3000");
}).listen(3000);
