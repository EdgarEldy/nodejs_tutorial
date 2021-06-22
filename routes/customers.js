var express = require('express');
var router = express.Router();

//Initialize Customer schema
var Customer = require('../models/Customer');

//Get customers
router.get('/customers', function (req, res, next) {
    Customer.find({}, function (err, docs) {
        if (!err) {
            res.render('customers/index', {
                customers: docs.map((customer) => customer.toJSON())
            });
        }
        else {
            res.json(err);
        }
    });
});

//Get customers/add view
router.get('/customers/add', function (req, res, next) {
    res.render('customers/add');
});

//save a new customer
router.post('/customers', function (req, res, next) {
    var customer = new Customer();
    customer.first_name = req.body.first_name;
    customer.last_name = req.body.last_name;
    customer.tel = req.body.tel;
    customer.email = req.body.email;
    customer.address = req.body.address;

    customer.save(function (err) {
        if (!err) {
            res.redirect('customers');
        } else {
            console.log('Error while record insertion:' + err);
        }
    });
});

module.exports = router;
