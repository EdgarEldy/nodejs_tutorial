var express = require('express');
var router = express.Router();
var Customer = require('../models/Customer');

// Retrieve customers

router.get('/customers', function (req, res) {
    Customer.find({}, function (err, docs) {
        if (!err) {
            res.render('customers/index', {
                customers: docs.map(customer => customer.toJSON()
                )
            });
        }else{
            res.json(err);
        }
    });
});

// Get the customers/add view

router.get('/customers/add', function (req, res) {
   res.render('customers/add');
});

module.exports = router;
