const mongoose = require('mongoose');

let categoriesSchema = new mongoose.Schema({
    'cat_name': String
});

mongoose.model('categories', categoriesSchema);