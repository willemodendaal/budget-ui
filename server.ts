///<reference path="./src/types/vendor.d.ts" />

var express = require('express');
var path = require('path');
var app = express();

process.chdir('src'); //So we're relative to src root.
app.set('port', (process.env.PORT || 3001));


app.get('/', function(req, res){
    res.sendFile(path.resolve('static/home.html'));
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;

    console.log('Node app listening at port %s', port);
});
