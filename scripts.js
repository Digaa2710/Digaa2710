
const signInButton = document.querySelector('button');
const usernameInput = document.getElementById('a');
const passwordInput = document.getElementById('pass');
const emailInput = document.getElementById('email');
const dateSelect = document.querySelector('.date select');
const timeSelect = document.querySelector('.time select');
const eventSelect = document.querySelector('.event select');

signInButton.addEventListener('click', function () {
    // Fetch data from form fields
    const username = usernameInput.value;
    const password = passwordInput.value;
    const email = emailInput.value;
    const date = dateSelect.value;
    const time = timeSelect.value;
    const event = eventSelect.value;

    // Check if username is empty
    if (username === '') {
        alert('Please enter a username');
        return;
    }

    // Check the password
    if (password === '2710') {
        // Password is correct
    } else if (password === '') {
        alert('Enter password');
        return;
    } else {
        alert('Enter valid password');
        return;
    }

    // Check if the email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Enter a valid email');
        return;
    }

    // Assuming the form is valid, you can use the fetched data as needed
    console.log('Username: ' + username);
    console.log('Selected Date: ' + date);
    console.log('Selected Time: ' + time);
    console.log('Selected Event: ' + event);

    // Perform further actions here
    alert('Form verified successfully!');
});





