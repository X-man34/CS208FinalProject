const express = require('express');
const path = require('path');
const createError = require('http-errors');

const indexRouter = require('./routes/index');

const app = express();
const orderUrl = 'https://example.com/order-online';
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About Us' },
  { href: '/comments', label: 'Comments' }
];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.locals.navLinks = navLinks;
  res.locals.orderUrl = orderUrl;
  res.locals.year = new Date().getFullYear();
  res.locals.currentPath = req.path;
  next();
});
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.statusCode = err.status || 500;
  res.locals.pageTitle = res.locals.statusCode === 404
    ? '404 | Downtown Donuts'
    : 'Error | Downtown Donuts';
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
