function validateForm() {
    var fullName = document.querySelector('.input[placeholder="Fullname"]').value;
    var emailInput = document.querySelector('.input[placeholder="Email"]');
    var email = emailInput.value;
    var message = document.querySelector('.textarea').value;


    if (!fullName) {
        alert('Please enter your full name.');
        return false;
    }


    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        clearErrorMessage();
        displayErrorMessage('Please enter your email address.');
        return false;
    }

    if (!emailRegex.test(email)) {
        displayErrorMessage('Invalid email address');
        return false;
    } else {
        clearErrorMessage();
    }

    if (!message) {
        alert('Please enter your message.');
        return false;
    }

    return true;
}

var emailInput = document.querySelector('.input[placeholder="Email"]');
emailInput.addEventListener('input', function() {
    var email = this.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        clearErrorMessage();
    }
    else if (!emailRegex.test(email)) {
        displayErrorMessage('Invalid email address');
    }
    else {
        clearErrorMessage();
    }
});

function displayErrorMessage(message) {
    var errorContainer = document.getElementById('email-error-message');
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.id = 'email-error-message';
        errorContainer.style.color = 'red';
        emailInput.parentNode.insertBefore(errorContainer, emailInput.nextSibling);
    }
    errorContainer.textContent = message;
}

function clearErrorMessage() {
    var errorContainer = document.getElementById('email-error-message');
    if (errorContainer) {
        errorContainer.textContent = '';
    }
}