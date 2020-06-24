var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Category = mongoose.model('Category');

router.get('/categories', function (req, res) {
    Category.find(function (err, docs) {
        if (!err){
            res.render('categories/index',{
                categories: docs
            });
        }
    });
});

router.get('/categories/add', function (req, res) {
    res.render('categories/add');
});

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

module.exports = router;
