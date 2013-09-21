
var express = require('express');
var app = express();

app.rootDir = __dirname;
app = require('./server/app.js')(app);
var http = require('http');
var server = http.createServer(app);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

server.io = require('socket.io').listen(server);

server.io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

