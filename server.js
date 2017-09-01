/* jslint node:true */
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var
  express = require('./config/express'),
  mongoose  = require('./config/mongoose'),
  app = express(mongoose()),
  port = process.env.PORT || 3000
;

app.listen(port, function() {
    console.log('HTTP Server running on port' + port);
});

module.exports = app;