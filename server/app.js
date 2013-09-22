
/**
 * Module dependencies.
 */
var http = require('http');
var routes = require('./routes');
var user = require('./routes/user');
var path = require('path');
var Bacon = require('baconjs').Bacon;
module.exports = function(app) {

  require('./config')(app);

  app.get('/', routes.index);
  app.get('/users', user.list);

  app.server = http.createServer(app);

  app.io = require('socket.io').listen(app.server);
/*
  app.io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('timedevent', function (data) {
      console.log(data.time);
    });
    console.log('bannanna phone!!');
  });
*/
  require('./bacon-socket')(app.io);

  return app;
};

