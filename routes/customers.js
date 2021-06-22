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

module.exports = router;
