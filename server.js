var express = require('express');
var app = express();


// next we are going to commit our code, but first..
// update your readme to explain what this app.get() method
// is doing..
// GET our HTTP method
// '/greeting' the location we need to go to make a request
// req, res client makes request, server sends response..

app.get('/greeting', function(req, res){
  res.send("You found the greeting endpoint!");
});

app.get('/happy', function(req, res){
  res.send("Its a beautiful day!!")
});

app.get('/sad', function(req, res){
  res.send("Its beautiful day - U2")
});
// make two new endpoints... one that sends a happy response..
// and one the sends back a sad response.

var server = app.listen(3000, function(){
  console.log("App 🔥🔥d up on port 3000")
});
