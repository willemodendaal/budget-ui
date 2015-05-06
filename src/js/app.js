var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('../static'));

app.get('/', function(req, res){
    res.sendfile(path.resolve( '../static/home.html'));
});

var server = app.listen(3001, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
