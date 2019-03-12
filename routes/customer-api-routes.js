var db = require("../models");
var passport = require("../config/passport");


module.exports = function(app) {
    app.get("/api/customer", function(req, res) {
        db.Customer.findAll({
            include: [db.Dog]
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });



    app.post("/api/login", passport.authenticate("local"), function(req, res) { 
        res.json("/members");
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
            pet_name1: req.body.pet_name1,
            pet_name2: req.body.pet_name2,
            pet_name3: req.body.pet_name3
            // textarea1: req.body.textarea1
        }).then(function() {
            res.redirect(307, "/members");

        }).catch(function(err) {
            console.log(err);
            res.json(err);    
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