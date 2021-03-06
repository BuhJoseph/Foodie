
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var list = require('./routes/list');
var match = require('./routes/match');
var match2 = require('./routes/match2');
var profile = require('./routes/profile');
var chat = require('./routes/chat');
var login = require('./routes/login');
var login1 = require('./routes/login1');
var register1 = require('./routes/register1');
var register2 = require('./routes/register2');
var register3 = require('./routes/register3');
var food = require('./routes/food');
var reset = require('./routes/reset');
var matchprofile = require('./routes/matchprofile');
var likedfood = require('./routes/likedfood');
var help = require('./routes/help');
var foodInfo = require('./routes/foodInfo');
var matchedFood = require('./routes/matchedFood')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
// Example route
// app.get('/users', user.list);
app.get('/list', list.view);
app.get('/match', match.view);
app.get('/match2/:name', match2.view);
app.get('/profile', profile.view);
app.get('/chat/:name', chat.view);
app.get('/login1', login1.view);
app.get('/login', login.view);
app.get('/register1', register1.view);
app.get('/register2', register2.view);
app.get('/register3', register3.view);
app.get('/food/:id', food.foodInfo);
app.get('/reset', reset.view);
app.get('/matchprofile/:name', matchprofile.view); //NOTE: do '/matchprofile/:id' next time
app.get('/likedfood', profile.viewLikedFood);
app.get('/help', help.view);
app.get('/foodInfo/:name', foodInfo.view);
app.get('/matchedFood', profile.viewMatchedFood);

app.post('/likeFood', profile.likeFood);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
