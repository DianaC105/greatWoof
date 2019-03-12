$(document).ready(function() {
    var logIn = $("form.login");
    var emailInput = $("input#email");
    var passInput = $("input#password");

    logIn.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        userLogin(userData.email, userData.password);
        emailInput.val("");
        passInput.val("");
    });

    function userLogin (email, password) {
        $.post("api/login", {
            email: email,
            password: password
        }).then(function(data) {
            window.location.replace(data);
        }).catch(function(err) {
            console.log(err);
        });
    }
});