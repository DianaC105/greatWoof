var path = require("path");
var isAuthenticated = require("../config/middleware/isAuth");

module.exports = function(app) {
    app.get ("/", function(req, res) {
       
        res.sendFile(path.join(__dirname, "..parallax-template/index.html"))
       
    });

    app.get("/new", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/signup.html"));
    });

    app.get("/login", function(req, res) {
        // if (req.userData) {
        //     res.redirect("/members");
        //   }
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
        res.sendFile(path.join(__dirname, "../parallax-template/dropInVisits.html"));
    });

    app.get("/food", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/food.html"));
    });

    app.get("/request", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/serviceSelect.html"));
    });
    

    app.get("/onboard", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/onBoard.html"));
    });

    app.get("/gallery", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/portfolio.html"));
    });

    app.get("/members", function(req, res) {
        res.sendFile(path.join(__dirname, "../parallax-template/members.html"));
    });



    // app.get("/dog", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/dogs.html"));
    // });


}