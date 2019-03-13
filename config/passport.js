var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
},
function(email, customer_password, done) {
    db.Customer,findOne({
        where: {
            usernameField: email,
            passwordField: customer_password
        }
    }).then(function(dbCustomer) {
        if (!dbCustomer) {
            return done(null, false, {
                message: "Invalid Email"
            });
        }
        else if (!dbCustomer.validPassword(customer_password)) {
            return done(null, false, {
                message: "Invalid Password"
            });
        }
        return done(null, dbCustomer);
    });
}

));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;