var express = require('express');
var router = express.Router();

var Category = require('../models/Category');
var Product = require('../models/Product');

// Retrieve products
router.get('/products', function (req, res) {
    Product.find({})
        .populate('category_id')
        .exec(function (err, docs) {
            if (!err) {
                res.render('products/index', {
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
        if (!err) {
            res.render('products/add', {
                categories: docs.map(category => category.toJSON())
            });
        } else {
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
        if (!err) {
            res.redirect('products');
        } else {
            console.log('Error during record insertion:' + err);
        }
    });
});

//Get products/edit/:id view with categories and product data
router.get('/products/edit/:id', async function (req, res, next) {

    var id = req.params.id;
    Category.find({}, function (err, docs) {
        Product.findById(id, function (err, doc) {
            if (!err) {
                res.render('products/edit', {
                    categories: docs.map(category => category.toJSON()),
                    product: doc.toJSON()
                });
            }
            else {
                res.json(err);
            }
        });
    });
    console.log(categories);

});

//Update a product
router.post('/products/edit/:id', function (req, res, next) {
    var product = {};
    product.category_id = req.body.category_id;
    product.product_name = req.body.product_name;
    product.unit_price = req.body.unit_price;

    var query = {
        _id: req.params.id
    }

    Product.updateOne(query, product, function (err) {
        if (!err) {
            res.redirect('/products');
        }
        else {
            console.log('Error durring record update:' + err);
        }
    });
});

//Delete a product
router.post('/products/delete/:id', function (req, res, next) {

    //Get product id
    var query = {
        _id: req.params.id
    };

    Product.remove(query, function (err) {
        if (!err) {
            res.redirect('/products');
        }
        else {
            console.log('Error during record delete:' + err);
        }
    });
});

module.exports = router;

