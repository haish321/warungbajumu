var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); // use this to connect databases mongodb
const mongoose = require("mongoose");
const methodOverride = require("method-override"); // library override

var flash = require("connect-flash");
var session = require("express-session");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// admin baju router
const adminRouter = require('./routes/admin');

var app = express();
const url = "mongodb://localhost:27017/db_warungbajumu"; /* path of your db */;

//to connect or create our database
mongoose.connect(url, { useUnifiedTopology : true, useNewUrlParser : true , }).then(() => {
   console.log("Connection successfull");
}).catch((e) => console.log("No connection"))

// mongoose.connect("mongodb://localhost:27017/db_warungbajumu",{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// menggunakan method override
app.use(methodOverride("_method"));

// menggunakan sessionm
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
  })
);

// menggunakan flash
app.use(flash());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// use router adminRouter
app.use("/admin", adminRouter)

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
  res.render('error');
});

module.exports = app;
