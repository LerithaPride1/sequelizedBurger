var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  res.redirect("/index");
});

router.get("/index", function(req, res) {
 	burger.selectAll (function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burger/create", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
    console.log(result);
    res.redirect("/index");
  });
});

router.post("/burger/update", function(req, res) {
  burger.updateOne(req.body.burger_id, function(result) {
    console.log(result)
    res.redirect("/index");
  });
});

// Export routes for server.js to use.
module.exports = router;