var express = require('express');
var router = express.Router();
var app = express();

router.get('/feedback', function (req, res) {
    res.render('feedback')
});

module.exports = router;