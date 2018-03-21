// // With pure NodeJS 
// var http = require('http');
// var myServer = http.createServer(function(request, response){
//     response.writeHead(200, {"Content-Type": "text/plain"}); plain could be changed to HTML
//     //to send back something to client
//     response.write('Digital Crafts'); //if this was response.write('<h1>Digital Crafts'</h1>) then plain should be changed to HTML
//     response.end();
// });
// //asking server to  to listen on  a specific port
// myServer.listen(3000);


// with Express
var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('Hello World!');
});
app.get('/home', function(req, res) {
    res.send('This is Home!');
});
app.get('/about', function(req, res) {
    res.send('About us!');
});
// route params example
app.get('/hello/:name', function(req, res){
    var name = req.params.name;
    res.send('Hello ' + name + '!');
});
// 

// display a message that verifies connection
app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});