var express = require('express');
var router = express.Router();
var app = express();

router.get('/about/:name', function(req, res){
    res.render('about', {
        name: req.params.name
    });
});

module.exports = router;