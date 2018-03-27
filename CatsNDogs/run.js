var express = require('express');
var app = express();

// making public file accessible
app.use(express.static('./public'));
// config to enable using ejs
app.set('view engine', 'ejs');
// access to routes
app.use(require('./routes/home-route.js'));
app.use(require('./routes/feedback-route.js'));
app.use(require('./routes/api.js'));




// port connection
app.listen(5000, function(){
    console.log('connected to port 5000')
})