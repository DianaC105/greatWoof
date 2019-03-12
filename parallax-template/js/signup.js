$(document).ready(function() {
    var signUp = $("form.user");
    var userName = $("input#customer_name");
    var emailInput = $("input#email");
    var passInput = $("input#password");
    var phoneInput = $("input#phone");
    var streetInput = $("input#street");
    var cityInput = $("input#city");
    var stateInput = $("input#state");
    var zipInput = $("input#zip");
    var petOne = $("input#pet_name1");
    var petTwo = $("input#pet_name2");
    var petThree = $("input#pet_name3");
    // var commentInput = $("input#textarea1");



    signUp.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            customer_name: userName.val().trim(),
            email: emailInput.val().trim(),
            password: passInput.val().trim(),
            phone: phoneInput.val().trim(),
            street: streetInput.val().trim(),
            city: cityInput.val().trim(),
            state: stateInput.val().trim(),
            zip: zipInput.val().trim(),
            pet_name1: petOne.val().trim(),
            pet_name2: petTwo.val().trim(),
            pet_name3: petThree.val().trim()
            // textarea1: commentInput.val().trim()
            
        };

        if (!userData.email || !userData.password) {
            return;
        }

        signupCust(userData.email, userData.password);
        
    });
  

    function signupCust (email, password) {
        $.post("/api/new", {
            customer_name: customer_name,
            email: email,
            password: password,
            phone: phone,
            street: street,
            city: city,
            state: state,
            zip: zip,
            pet_name1: pet_name1,
            pet_name2: pet_name2,
            pet_name3: pet_name3
            // textarea1: textarea1
        }).then(function() {
            window.location.replace("/members");
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        alert("error");
    }

});









// $("#submit-btn").on("click", function(event) {
//     event.preventDefault();
//     console.log($("#pet_name1"))
//     var newCustomer = {
//         customer_name: $("#customer_name").val().trim(),
//         email: $("#email").val().trim(),
//         password: $("#password").val().trim(),
//         phone: $("#phone").val().trim(),
//         street: $("#street").val().trim(),
//         city: $("#city").val().trim(),
//         state: $("#state").val().trim(),
//         zip: $("#zip").val().trim(),
//         pet_name1: $("#pet_name1").val().trim(),
//         pet_name2: $("#pet_name2").val().trim(),
//         pet_name3: $("#pet_name3").val().trim(),
//         comments: $("#textarea1").val().trim()

//     };
//     $.post("api/new", newCustomer).then(function(data) {
//         console.log(data); 
//         console.log(newCustomer);
//          // redirect to the next page
//         window.location.replace("/service.html");
       
//     });


// });


