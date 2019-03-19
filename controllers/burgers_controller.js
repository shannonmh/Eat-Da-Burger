var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, req.body.devoured
        ], function () {
            // Send back the ID of the new quote
            //res.json({ id: result.insertId });
            res.redirect("/");
        });
});

router.put("/api/burgers", function (req, res) {
    var condition = "id = " + req.body.id;
    //console.log(req.params)

    console.log("condition", condition);
    console.log(req.body);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        console.log('hit');
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;