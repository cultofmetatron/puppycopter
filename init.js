
var express = require('express');
var app = express();

app.rootDir = __dirname;
var http = require('http');

app = require('./server/app.js')(app);


app.server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


