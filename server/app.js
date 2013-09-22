
/**
 * Module dependencies.
 */
var http = require('http');
var routes = require('./routes');
var user = require('./routes/user');
var path = require('path');

module.exports = function(app) {

  require('./config')(app);

  app.get('/', routes.index);
  app.get('/users', user.list);

  var server = http.createServer(app);

  server.io = require('socket.io').listen(server);

  server.io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });

  return server;
};

