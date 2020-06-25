var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    'cat_name': {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Category', categorySchema, 'categories');
