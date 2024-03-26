//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = document.getElementById("loginForm");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        var formData = new FormData(form);

        // Construct alert message
        var alertMessage = "";
        formData.forEach(function(value, key) {
            alertMessage += key + ": " + value + " ";
        });

        // Show alert with form information
        alert(alertMessage.trim());
    });
});
