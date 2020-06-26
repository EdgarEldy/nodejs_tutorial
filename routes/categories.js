var express = require('express');
var router = express.Router();
var Category = require('../models/Category');

// Retrieve product categories
router.get('/categories', function (req, res) {
    Category.find({}, function (err, docs) {
        if (!err) {
            res.render('categories/index', {categories: docs.map(category => category.toJSON())});
        } else {
            res.json(err);
        }
    });
});

// Get the product category form
router.get('/categories/add', function (req, res) {
    res.render('categories/add');
});

//
router.post('/categories', function (req, res) {
    add(req, res);
});

//Insert a new product category
function add(req, res) {
    var category = new Category();
    category.cat_name = req.body.cat_name;
    category.save(function (err, doc) {
        if (!err) {
            res.redirect('categories');
        } else {
            console.log('Error during record insertion :' + err);
        }
    });
}


// Get the product category form with data to update
router.get('/categories/edit/:id', function (req, res) {
    Category.findById(req.params.id, function (err, doc) {
        if (!err) {
            res.render('categories/edit', {
                category: doc.toJSON()
            });
        }
        else {
            res.json(err);
        }
    })
});

module.exports = router;
