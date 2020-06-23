var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    'cat_name': {
        type: String
    }
});

mongoose.model('Category', categorySchema);
