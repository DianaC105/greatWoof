$(document).ready(function() {
    var emailInput = "";
    var passInput = "";
    var logIn = $("form.login");
  
  

    logIn.on("submit", function(event) {

        emailInput = $("input[name=login-email]").val();
        passInput = $("input[name=login-password]").val();
       
        event.preventDefault();
        var userData = {
            email: emailInput,
            customer_password: passInput
            
        };

        console.log(userData);

        if (!userData.email || !userData.customer_password) {
            return;
        }

        // console.log(userData + "login userdata");

        // app.get('/api/login', function(req, res, next) {
        //     passport.authenticate('local', function(err, userData, info) {
        //       if (err) { return next(err); }
        //       if (!userData) { return res.redirect('/login'); }
        //       req.logIn(userData, function(err) {
        //         if (err) { return next(err); }
        //         return res.redirect('/members');
        //       });
        //     })(req, res, next);
        //   });
    




        $.post("/api/login", userData)
        .then(function() {
            console.log(userData);
            // window.location.href = "http://localhost:8080/members";

        });

       


        // userLogin(userData);
        // emailInput.val("");
        // passInput.val("");
        // console.log(userData + "login userdata function");
    });

    // function userLogin (data) {

    // }
});