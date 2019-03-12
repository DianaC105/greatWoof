$(document).ready(function() {
    $.get("api/customer").then(function(data) {
        $("#customer_name").text(data.email);
    });
});