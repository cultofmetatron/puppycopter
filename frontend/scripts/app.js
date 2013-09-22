
module.exports  = function(socket) {
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
    setInterval(function() {
      socket.emit('timedevent', { time: (new Date()).toString() });
    }, 1000);
  });
};
