// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var passport = require("./config/passport");
var session = require('express-session');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
// app.use(express.static("public"));
app.use(express.static("parallax-template"));

app.use(session({ secret: "doggo", resave: true,
saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================

require("./routes/html-routes.js")(app);
require("./routes/customer-api-routes.js")(app);


// require("./routes/html-routes.js");
// require("./routes/customer-api-routes.js");
// require("./routes/dog-api-routes.js");

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
/////change force: true to false BEFORE DEPLOYMENT^^^^