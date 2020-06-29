var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
    'first_name': {
        type: String,
        required: true
    },
    'last_name': {
        type: String,
        required: true
    },
    'tel': {
        type: String,
        required: true
    },
    'email': {
        type: String,
        required: true
    },
    'address': {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema, 'customers');
