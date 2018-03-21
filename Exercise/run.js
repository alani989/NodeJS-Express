var express = require('express');
var app = express();

// prints hello world at the root URL
app.get('/', function (req, res) {
    res.send("Hello World");
});
// adding different routs
app.get('/cats', function (req, res) {
    res.send("Meow!");
});
app.get('/dogs', function (req, res) {
    res.send("Woof!");
});
app.get('/cats_and_dogs', function (req, res) {
    res.send("Living together");
});
// route parameters
app.get('/greeting/:user', function (req, res) {
    var name = req.params.user;
    res.send("Hi there " + name);
});
// query parameters
app.get('/year', function (req, res) {
    var currentYear = new Date().getFullYear(); //to get the current year
    var age = currentYear - (req.query.age*1); //to convert req.query.age into a number we multiplied by 1
    res.send("You were born in " + age);
});

// initialize and test connection
app.listen(5000, function () {
    console.log('Connected to port 5000');
})
