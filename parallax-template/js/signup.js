$(document).ready(function() {
    // var commentInput = $("input#textarea1");
    var signUp = "";
    var userName = "";
    var emailInput = "";
    var passInput = "";
    var phoneInput = "";
    var streetInput = "";
    var cityInput = "";
    var stateInput = "";
    var zipInput = "";
    var petOne = "";
    var petTwo = "";
    var petThree = "";
    signUp = $("form.user");


    
    
    signUp.on("submit", function(event) {
        userName = $("input#customer_name");
        emailInput = $("input#email");
        passInput = $("input#password");
        phoneInput = $("input#phone");
        streetInput = $("input#street");
        cityInput = $("input#city");
        stateInput = $("input#state");
        zipInput = $("input#zip");
        petOne = $("input#pet_name1");
        petTwo = $("input#pet_name2");
        petThree = $("input#pet_name3");
        
        event.preventDefault();
        var userData = {
            customer_name: userName.val().trim(),
            email: emailInput.val().trim(),
            customer_password: passInput.val().trim(),
            phone: phoneInput.val().trim(),
            street: streetInput.val().trim(),
            city: cityInput.val().trim(),
            customer_state: stateInput.val().trim(),
            zip: zipInput.val().trim(),
            pet_name1: petOne.val().trim(),
            pet_name2: petTwo.val().trim(),
            pet_name3: petThree.val().trim()
            // textarea1: commentInput.val().trim()
            
        };

        if (!userData.email || !userData.customer_password) {
            return;
        }

        console.log(userData);

        signupCust(userData);
        
    });
  

    function signupCust (data) {
        
        $.post("/api/new", data)
        .then(function (responsedata){
                console.log("hello");
                window.location.replace("/login");

        });

        /*$.post("/api/new", (data) => {
			console.log(data);
            // window.location.replace("/members");
        })*/
    }

    function handleLoginErr(err) {
        alert("error");
    }

});







// $(document).ready(function() {
//     var signUp = $("form.user");
//     var userName = $("input#customer_name");
//     var emailInput = $("input#email");
//     var passInput = $("input#password");
//     var phoneInput = $("input#phone");
//     var streetInput = $("input#street");
//     var cityInput = $("input#city");
//     var stateInput = $("input#state");
//     var zipInput = $("input#zip");
//     var petOne = $("input#pet_name1");
//     var petTwo = $("input#pet_name2");
//     var petThree = $("input#pet_name3");
//     // var commentInput = $("input#textarea1");



//     signUp.on("submit", function(event) {
//         event.preventDefault();
//         var userData = {
//             customer_name: userName.val().trim(),
//             email: emailInput.val().trim(),
//             password: passInput.val().trim(),
//             phone: phoneInput.val().trim(),
//             street: streetInput.val().trim(),
//             city: cityInput.val().trim(),
//             state: stateInput.val().trim(),
//             zip: zipInput.val().trim(),
//             pet_name1: petOne.val().trim(),
//             pet_name2: petTwo.val().trim(),
//             pet_name3: petThree.val().trim()
//             // textarea1: commentInput.val().trim()
            
//         };

//         if (!userData.email || !userData.password) {
//             return;
//         }

//         signupCust(userData.customer_name, userData.email, userData.password, userData.phone, userData.street, userData.city, userData.state, userData.zip, userData.pet_name1, userData.pet_name2, userData.pet_name3 );
//         userName.val("");
//         emailInput.val("");
//         passInput.val("");
//         phoneInput.val("");
//         streetInput.val("");
//         cityInput.val("");
//         stateInput.val("");
//         zipInput.val("");
//         petOne.val("");
//         petTwo.val("");
//         petThree.val("");
 
//     });
  

//     function signupCust (customer_name,email, password, phone, street, city, state, zip, pet_name1, pet_name2, pet_name3) {
//         $.post("/api/new", {
//             customer_name: customer_name,
//             email: email,
//             password: password,
//             phone: phone,
//             street: street,
//             city: city,
//             state: state,
//             zip: zip,
//             pet_name1: pet_name1,
//             pet_name2: pet_name2,
//             pet_name3: pet_name3
//             // textarea1: textarea1
//         }).then(function() {
//             window.location.href("/members");
//         }).catch(handleLoginErr);
//     }

//     function handleLoginErr(err) {
//         alert("error");
//     }

// });










// // $("#submit-btn").on("click", function(event) {
// //     event.preventDefault();
// //     console.log($("#pet_name1"))
// //     var newCustomer = {
// //         customer_name: $("#customer_name").val().trim(),
// //         email: $("#email").val().trim(),
// //         password: $("#password").val().trim(),
// //         phone: $("#phone").val().trim(),
// //         street: $("#street").val().trim(),
// //         city: $("#city").val().trim(),
// //         state: $("#state").val().trim(),
// //         zip: $("#zip").val().trim(),
// //         pet_name1: $("#pet_name1").val().trim(),
// //         pet_name2: $("#pet_name2").val().trim(),
// //         pet_name3: $("#pet_name3").val().trim(),
// //         comments: $("#textarea1").val().trim()

// //     };
// //     $.post("api/new", newCustomer).then(function(data) {
// //         console.log(data); 
// //         console.log(newCustomer);
// //          // redirect to the next page
// //         window.location.replace("/service.html");
       
// //     });


// // });


