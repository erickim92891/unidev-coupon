var express = require('express');
var app = express();
var port = 8080;

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/angular', express.static(__dirname + '/angular'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log ('http://port-' + port + '.05u43xf07o1lwhfrs11xhzsfoxyldi11ut0rda3t9e8kt9.box.codeanywhere.com');
});