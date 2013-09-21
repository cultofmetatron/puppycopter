
/**
 * Module dependencies.
 */

var routes = require('./routes');
var user = require('./routes/user');
var path = require('path');

module.exports = function(app) {

  require('./config')(app);
  app.get('/', routes.index);
  app.get('/users', user.list);

  return app;
};

