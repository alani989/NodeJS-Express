var express = require('express');
var reload = require('reload')
var app = express();

// making views-style file public and accessible
app.use(express.static('./views-style'));
// config to enable using ejs
app.set('view engine', 'ejs');
// config to enable using routes
app.use(require('./routes/hello'));
app.use(require('./routes/about'));



var server = app.listen(5000, function () {
    console.log('Connected to port 5000');
})

reload(app);