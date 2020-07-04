var express = require('express');
var router = express.Router();

var Category = require('../models/Category');
var Product = require('../models/Product');

// Retrieve products
router.get('/products', function (req, res) {
    Product.find({})
        .populate('category_id')
        .exec(function (err, docs) {
           if (!err){
               res.render('products/index',{
                   products: docs.map(product => product.toJSON())
               });
           } else {
               res.json(err);
           }
        });
});

// Get the products/add form
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

// Inserting a new product
router.post('/products', function (req, res) {
   var product = new Product();
    product.category_id = req.body.category_id;
    product.product_name = req.body.product_name;
    product.unit_price = req.body.unit_price;

    product.save(function (err) {
       if (!err){
           res.redirect('products');
       }  else{
           console.log('Error during record insertion:' + err);
       }
    });
});

module.exports = router;

