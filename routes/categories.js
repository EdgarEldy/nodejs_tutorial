var express = require('express');
var router = express.Router();

router.get('/categories', function (req, res) {
   res.render('categories/index');
});

router.get('/categories/add', function (req, res) {
   res.render('categories/add');
});

module.exports = router;
