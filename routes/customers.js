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
        } else {
            res.json(err);
        }
    });
});

// Get the customers/add view

router.get('/customers/add', function (req, res) {
    res.render('customers/add');
});

// Inserting a new customer

router.post('/customers', function (req, res) {
    var customer = new Customer();
    customer.first_name = req.body.first_name;
    customer.last_name = req.body.last_name;
    customer.tel = req.body.tel;
    customer.email = req.body.email;
    customer.address = req.body.address;

    customer.save(function (err) {
        if (!err) {
            res.redirect('customers');
        } else {
            console.log('Error during record insertion :' + err);
        }
    });
});

router.get('/customers/edit/:id', function (req, res) {
   Customer.findById(req.params.id, function (err, doc) {
       if (!err){
           res.render('customers/edit',{
               customer: doc.toJSON()
           });
       } else{
           res.json(err);
       }
   })
});

// Update a customer
router.post('/customers/edit/:id', function (req, res) {
   var customer = {};
    customer.first_name = req.body.first_name;
    customer.last_name = req.body.last_name;
    customer.tel = req.body.tel;
    customer.email = req.body.email;
    customer.address = req.body.address;

    var query = {
      _id: req.params.id
    };

    Customer.updateOne(query, customer, function (err) {
       if (!err){
           return res.redirect('/customers');
       }  else{
           console.log('Error during record update:' + err);
       }
    });
});

// Delete a customer
router.post('/customers/delete/:id', function (req, res) {
   var query = {
     _id: req.params.id
   };

   Customer.remove(query, function (err) {
      if (!err){
          res.redirect('/customers');
      }  else{
          console.log('Error during delete:' + err);
      }
   });
});

module.exports = router;