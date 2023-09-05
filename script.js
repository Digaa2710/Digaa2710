const signInButton = document.querySelector('button');
const usernameInput = document.getElementById('a');
const passwordInput = document.getElementById('pass');
const emailInput = document.getElementById('email');

signInButton.addEventListener('click', function () {
    if (usernameInput.value === '') {
        alert('Please enter a username');
        return;
    }

    if (passwordInput.value === '') {
        alert('Please enter a password');
        return;
    }

    if (emailInput.value === '') {
        alert('Please enter an email');
        return;
    }

    // Assuming the form is valid, you can perform further actions here
    alert('Form submitted successfully!');
})