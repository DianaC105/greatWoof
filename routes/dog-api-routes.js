var db = require("../models");

module.exports = function(app) {
    app.get("/api/dog", function(req, res) {
        var query = {};
        if (req.query.customer_id) {
            query.CustomerId = req.query.customer_id;
        }
        db.Dog.findAll ({
            where: query,
            include: [db.Customer]
        }).then(function(dbDog) {
            res.json(dbDog);
        });
    });

    app.get("/api/dog/:id", function(req, res) {
        db.Dog.findOne({
            where: {
                id: req.params.id
            },
            include: [dbCustomer]
        }).then(function(dbDog) {
            res.json(dbDog);
        });
    });

    app.post("api/dog", function(req, res) {
        db.Dog.create(req, res).then(function(dbDog) {
            res.json(dbDog)
        });
    });

    app.delete("/api/dog/:id", function(req, res) {
        db.Dog.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbDog) {
            res.json(dbDog);
        });
    });

    app.put("/api/dog", function(req, res) {
        db.Dog.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbDog) {
            res.json(dbDog);
        });
    });
}