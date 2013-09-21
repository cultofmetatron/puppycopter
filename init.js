
var express = require('express');
var app = express();

app.rootDir = __dirname;
app = require('./server/app.js')(app);
var http = require('http');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
