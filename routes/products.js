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

// Getting the products/add view
router.get('/products/add', function (req, res) {
   Category.find({}, function (err, docs) {
     if (!err){
         res.render('products/add',{
            categories: docs.map(category => category.toJSON())
         });
     }   else{
         res.json(err);
     }
   });
});

module.exports = router;

