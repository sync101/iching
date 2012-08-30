
/**
 * Module dependencies.
 */
//test save this now again
var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');
  

//from example: GLOBAL.app = module.exports = express.createServer();
//var app = express();

GLOBAL.app = module.exports = express();

mongoose.connect('mongodb://localhost/ichingdb')

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.errorHandler({dumpExceptions:true, showStack: true}));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

routes = require('./routes/routes.js');

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
