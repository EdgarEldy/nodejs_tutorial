var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    'category_name': {
        type: String,
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

var Category = mongoose.model('Category',categorySchema, 'categories');

module.exports = Category;
