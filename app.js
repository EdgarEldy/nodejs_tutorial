var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

//Setting mongoose connection to mongodb
mongoose.connect('mongodb://localhost:27017/nodejs_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function (err) {
        if (!err) {
            console.log('Mongodb connection succeed.')
        } else {
            console.log('Error in DB connection:' + err)
        }
    });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Categories
var categoriesRouter = require('./routes/categories');

// Customers
var customersRouter = require('./routes/customers');

// Products
var productsRouter = require('./routes/products');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// view engine setup
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'main', partialsDir: ['views/partials']}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Categories
app.get('/categories', categoriesRouter);
app.get('/categories/add', categoriesRouter);
app.post('/categories', categoriesRouter);
app.get('/categories/edit/:id', categoriesRouter);
app.post('/categories/edit/:id', categoriesRouter);
app.post('/categories/delete/:id', categoriesRouter);

// Customers
app.get('/customers', customersRouter);
app.get('/customers/add', customersRouter);
app.post('/customers', customersRouter);
app.get('/customers/edit/:id', customersRouter);
app.post('/customers/edit/:id', customersRouter);
app.post('/customers/delete/:id', customersRouter);

// Products
app.get('/products', productsRouter);
app.get('/products/add', productsRouter);
app.post('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
