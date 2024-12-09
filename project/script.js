
$(document).ready(function () {
    // Create a dialog element
    $("#dialog").dialog({
        autoOpen: false, // Dialog starts closed
        title: "Welcome to NovaFlight Dynamics",
        modal: true, // Makes the dialog modal
        buttons: {
            "Close": function () {
                $(this).dialog("close"); // Close button
            }
        }
    });

    // Open the dialog on button click
    $("#open-dialog").click(function () {
        $("#dialog").dialog("open");
    });
});


// Function to handle the form submission using AJAX
document.addEventListener('DOMContentLoaded', function() {
    // Ensure the form element is available
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', submitForm);
    } else {
        console.error('Form with id "contact-form" not found.');
    }
});
function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form values
    var fullName = document.getElementById('full-name').value;
    var email = document.getElementById('email').value;

    // Prepare the data as JSON
    var formData = {
        "full-name": fullName,
        "email": email
    };

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Open a POST request to the Formspree endpoint
    xhr.open('POST', 'https://formspree.io/f/mbljrvwe', true);

    // Set the request content type to JSON
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set up a callback for when the request completes
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Handle successful submission
            alert('Form submitted successfully!');
            
            // Reset the form (optional)
            document.getElementById('contact-form').reset();

            // Optionally hide the form and show a thank you message
            document.getElementById('contact-form').style.display = 'none';  // Hide the form
            var thankYouMessage = document.createElement('div');
            thankYouMessage.innerHTML = '<h2>Thank you for submitting the form!</h2>';
            document.body.appendChild(thankYouMessage);  // Display a thank you message on the page
        } else {
            // Handle error
            alert('There was a problem with the form submission.');
        }
    };

    // Send the form data as a JSON string
    xhr.send(JSON.stringify(formData));
}

// Attach the submitForm function to the form's submit event
document.getElementById('contact-form').addEventListener('submit', submitForm);
