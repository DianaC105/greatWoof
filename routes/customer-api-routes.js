var db = require("../models");

module.exports = function(app) {
    app.get("/api/customer", function(req, res) {
        db.Customer.findAll({
            include: [db.Dog]
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });

    app.get("/api/customer/:id", function(req, res) {
        db.Customer.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Dog]
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });

    app.post("/api/new", function(req, res) {
        console.log(req.body)
        db.Customer.create({
            customer_name: req.body.customer_name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            pet_name: req.body.pet_name,
            comments: req.body.comments
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
            console.log(dbCustomer);
            
        });
    });

    app.delete("/api/customer/:id", function(req, res) {
        db.Customer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });
}




// {
//     "customer_name": "danielle",
//     "password": "pass",
//     "email": "dees@email.com",
//     "street": "main st",
//     "city": "newark",
//     "state": "nj",
//     "zip": "08807",
//     "pet_name": "cammie",
//     "breed": "boxer",
//     "service": "dog walking",
//     "comments": "na"
// }