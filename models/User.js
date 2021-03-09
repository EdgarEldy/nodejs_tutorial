var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  registered_at: {
    type: Date,
    default: Date.now,
  },
});

var User = mongoose.model(userSchema, "users");

module.exports = User;
