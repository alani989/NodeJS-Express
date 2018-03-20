var fs = require('fs');

fs.readFile('readme.md', function(err,data){
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
});