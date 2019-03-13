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

        loginCust(userData);

        // console.log(userData + "login userdata");

       function loginCust (userData) {
           $.post("/api/login", userData)
           .then(function () {
               window.location.replace("/members");
               
           });
       };




        // $.post("/api/login", userData)
        // .then(function() {
        //     //console.log(data);
        //     // window.location.href = "http://localhost:8080/members";

        // });

       


        // userLogin(userData);
        // emailInput.val("");
        // passInput.val("");
        // console.log(userData + "login userdata function");
    });

    // function userLogin (data) {

    // }
});