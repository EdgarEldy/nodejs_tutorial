var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var categorySchema = new Schema({
    'cat_name': {
        type: String,
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

module.exports = mongoose.model('Category', categorySchema, 'categories');
