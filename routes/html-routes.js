var path = require("path");

module.exports = function(app) {
    app.get ("/", function(req, res) {
        res.sendFile(path.join(__dirname, "..parallax-template/index.html"))
    });

    app.get("/new", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/signup.html"));
    });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/login.html"));
    });

    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/contact.html"));
    });

    app.get("/walk", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/walking.html"));
        
    });

    app.get("/pickup", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/dropIn.html"));
    });

    app.get("/visit", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/dropinVisit.html"));
    });

    app.get("/food", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/food.html"));
    });

    app.get("/request", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/service.html"));
    });



    // app.get("/dog", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/dogs.html"));
    // });


}