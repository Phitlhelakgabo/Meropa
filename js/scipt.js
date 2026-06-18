// Meropa Casino JavaScript

// Welcome message when page loads
window.onload = function() {
    alert("Welcome to Meropa Casino Website!");
};

// Contact Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

// Button click interaction
function showMessage() {
    alert("Enjoy your gaming experience at Meropa Casino!");
}