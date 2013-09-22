var Bacon = require('baconjs').Bacon;
var events = require('events');
//wrap up the io object in an eventEmitter and pass it back as a baconjs eventStream
module.exports = function(io) {
  //must abstract socket stream behind this interface
  var sock = function(io) {
    events.EventEmitter.call(this);
    this.io = io;
  };

  sock.fn = sock.prototype;
  sock.fn = Object.create(events.EventEmitter.prototype);
  sock.fn.getStream = function(eventName) {
    
  
  };




  
};
