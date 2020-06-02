const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodejs_db', {
        useNewUrlParser: true
    },
    (err) => {
        if (!err) {
            console.log('Mongodb connection succeed.')
        } else {
            console.log('Error in DB connection:' + err)
        }
    });