'use strict'

let express= require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    redis = require('connect-redis'),
    helmet = require('helmet'),
    app = express();

/* istanbul ignore next */
/*if (process.env.NODE_ENV === 'development') {
  app.use(require('morgan')('dev'));
}*/

let baseURL = process.env.NODE_ENV == 'production'
  ? 'https://ebseiten.herokuapp.com/' : 'http://localhost:5000/';

app.set('view engine', 'ejs');
app.set('views', './src');
app.use(cookieParser());
app.use(express.static("public"));
app.use(function (req, res, next) {
    if (req.header('x-forwarded-proto') == 'http') {
      res.redirect(301, 'https://' + 'www'+ '.'+ 'ebseiten.com' + req.url)
      console.log('redirect working');
      return
    }
    next()
  });
app.use(helmet.frameguard());
app.use(helmet.hsts());
app.use(helmet.noSniff());


var RedisStore = redis(session);
var myRedis;

/* istanbul ignore next */
if (process.env.REDIS_URL) {
  myRedis = new RedisStore(process.env.REDIS_URL ? { url: process.env.REDIS_URL } : {} );
} else {
  myRedis = new RedisStore();
}

app.use(session({
  secret: 'Shhhhh!',
  cookie: {
    httpOnly: true,
    secure: true
  },
  resave: false,
  saveUninitialized: false,
  store: myRedis
}));

// to extract form data from POST bodies
app.use(bodyParser.json());                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//requiring routes module
app.use(require('./routes'));

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  require('express-debug')(app);
}


// allow other modules to use the server
module.exports = app;