
$("#submit-btn").on("click", function(event) {
    event.preventDefault();

    var newCustomer = {
        customer_name: $("#customer_name").val().trim(),
        email: $("#email").val().trim(),
        password: $("#password").val().trim(),
        phone: $("#phone").val().trim(),
        street: $("#street").val().trim(),
        city: $("#city").val().trim(),
        state: $("#state").val().trim(),
        zip: $("#zip").val().trim(),
        pet_name1: $("#pet_name1").val().trim(),
        pet_name2: $("#pet_name2").val().trim(),
        pet_name3: $("#pet_name3").val().trim(),
        comments: $("#textarea1").val().trim()

    };
    $.post("api/new", newCustomer).then(function(data) {
        console.log(data); 
        console.log(newCustomer);
         // redirect to the next page
        window.location.replace("/service.html");
       
    });


});


