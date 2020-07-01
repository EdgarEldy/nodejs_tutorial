var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    'cat_name': {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

module.exports = mongoose.model('Category', categorySchema, 'categories');
