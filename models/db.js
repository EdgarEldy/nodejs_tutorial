var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodejs_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function(err){
        if (!err) {
            console.log('Mongodb connection succeed.')
        } else {
            console.log('Error in DB connection:' + err)
        }
    });

require('./Category');
