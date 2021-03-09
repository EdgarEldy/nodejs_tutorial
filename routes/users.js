var express = require("express");
var router = express.Router();

var User = require("../models/User");

// Show all users
router.get("/users", function (req, res) {
  res.render("users/index");
});

module.exports = router;
