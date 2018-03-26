var express = require('express');
var router = express.Router();
var app = express();

var fileData = require('../data/animals.json');

router.get('/', function (req, res) {
    // var data = req.app.get('appData'); what is this for?
    var names = [];
    var desc = [];
    var photos = [];

    fileData.animals.forEach(function (animal) {
        names = names.concat(animal.name);
        desc = desc.concat(animal.description);
        photos = photos.concat(animal.imgURL);
    });

    res.render('home', {
        animalName: names,
        animalDesc: desc,
        animalPic: photos
    }
    );
});

module.exports = router;