// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
require("dotenv").config();
const sendMail = require('./mail');
const path = require('path');

var passport = require("./config/passport");
var session = require('express-session');
var bodyParser = require("body-parser");


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

app.use(express.static("./parallax-template/"));


app.use(session({ secret: "doggo", resave: true,
saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================

require("./routes/html-routes.js")(app);
require("./routes/customer-api-routes.js")(app);

app.post('/email', (req, res) => {
  console.log(req.body.email);
  var mailform = "<h1>New Service Request.</h1> \nFrom: "+req.body.email
  +"\nPhone #: "+req.body.phone+"\nService Requested: "+req.body.service
  +"\nOn: "+req.body.date+"\nAt: "+req.body.time+"\nMessage: "
  +req.body.spreq;
  console.log(mailform);
  var hsubject = "New Service Request!";
  sendMail(hsubject, mailform, function(err, data){
    if(err){
      res.status(500).json({message: 'Internal Error'});
    } else{
      res.json({ message: 'Email Sent!'});
    }
  });
  //const {subject, email, text } = req.body;
  //console.log('Data: ', req.body);

  /*sendMail(email, subject, text, function(err, data){
    if(err){
      res.status(500).json({ message: 'Internal Error'});
    } else{
      res.json({ message: 'Email sent!!!'});
    }
  });*/
});

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