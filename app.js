/**
 * 
 * - sitting app with enverment 
 * 
 */

if (process.env.NODE_ENV !== 'production') {

  require('dotenv').config(); 
   
 }

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const MONGODB = require('./config/databaseMongodb') 
const logger = require('morgan');
const flash = require('connect-flash');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// --->  session setup
   app.use(session({
   secret:process.env.SECRET_SESSION,
   resave:false,
   saveUninitialized:false,
   cookie:{maxAge:60000*15}
}));

// ---> setup flash for alert message
app.use(flash());


app.use('/', indexRouter);
app.use('/', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('errors/error');
});

module.exports = app;
