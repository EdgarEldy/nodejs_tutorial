var express = require('express');
var router = express.Router();

var Category = require('../models/Category');
var Product = require('../models/Product');

// Retrieve products
router.get('/products', function (req, res) {
    Product.find({}, function (err, docs) {
        if (!err) {
            res.render('products/index', {
                products: docs.map(product => product.toJSON())
            });
        } else {
            res.json(err);
        }
    });
});

module.exports = router;

