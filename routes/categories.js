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

// Adding a new product category
router.post('/categories', function (req, res) {
    var category = new Category();
    category.cat_name = req.body.cat_name;

    category.save(function (err, doc) {
        if (!err) {
            res.redirect('categories');
        } else {
            console.log('Error during record insertion :' + err);
        }
    });
});

// Get the product category form with data to update
router.get('/categories/edit/:id', function (req, res) {
    Category.findById(req.params.id, function (err, doc) {
        if (!err) {
            res.render('categories/edit', {
                category: doc.toJSON()
            });
        } else {
            res.json(err);
        }
    })
});

// Update a document by id
router.post('/categories/edit/:id', function (req, res) {
    var category = {};
    category.cat_name = req.body.cat_name;
    var query = {
        _id: req.params.id
    };

    Category.updateOne(query, category, function (err) {
        if (!err) {
            res.redirect('/categories');
        } else {
            console.log('Error during record update :' + err);
        }
    });
});


module.exports = router;
