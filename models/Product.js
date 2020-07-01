var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    'category_id': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    'product_name': {
        type: String,
        required: true
    },
    'unit_price': {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema, 'products');
