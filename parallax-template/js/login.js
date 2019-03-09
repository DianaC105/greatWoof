$(document).ready(function() {
    var logIn = $("form.login");
    var emailInput = $("iput#email");
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

    function userLog
})