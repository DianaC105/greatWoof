$(document).ready(function() {
    var emailInput = "";
    var passInput = "";
    var logIn = $("form.login");
  
  

    logIn.on("submit", function(event) {
        emailInput = ("input#email");
        passInput = ("input#password");
        

        event.preventDefault();
        var userData = {
            email: emailInput,
            customer_password: passInput
            
        };

        console.log(userData + "login userdata");

        if (!userData.email || !userData.customer_password) {
            return;
        }

        console.log(userData + "login userdata");

        userLogin(userData);
        // emailInput.val("");
        // passInput.val("");
        console.log(userData + "login userdata function");
    });

    function userLogin (data) {
        $.post("/api/login",  data)
        .then(function() {
            window.location.replace("/members");
        });

    }
});