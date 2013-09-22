var Bacon = require('baconjs').Bacon;
var events = require('events');
var _ = require('underscore');
//wrap up the io object in an eventEmitter and pass it back as a baconjs eventStream
module.exports = function(io) {
  //must abstract socket stream behind this interface
  var connected = true;
  var socket;

  var StreamSock = function(eventTable) {
    events.EventEmitter.call(this);
    this.active_socket = socket;
    this.io = io;
    this.events = eventTable;


  };

  StreamSock.prototype.createStream = function(eventName, fn) {
    socket.on(eventName, fn);
    

  };

  StreamSock.prototype.changeConnectionSocket = function() {
  
  };


  //initialize the code
  io.sockets.on('connection', function(newSocket) {
    if (!_.isUndefined(socket)) {
      console.log('socket == socket??', socket === newSocket);
    }
    socket = newSocket;
    
    connected = true;
    socket.on('disconnect', function() {
      connected = false;
    });

    //now we bind all existing events to this

      
  });

  
 


  StreamSock.fn = sock.prototype;
  StreamSock.fn = Object.create(events.EventEmitter.prototype);
  
  StreamSock.fn.createStream = function(eventName) {
    
  };




  
};
