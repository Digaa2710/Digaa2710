
const signInButton = document.querySelector('button');
const usernameInput = document.getElementById('a');
const passwordInput = document.getElementById('pass');
const emailInput = document.getElementById('email');
const dateSelect = document.querySelector('.date select');
const timeSelect = document.querySelector('.time select');
const eventSelect = document.querySelector('.event select');

signInButton.addEventListener('click', function () {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const email = emailInput.value;
    const date = dateSelect.value;
    const time = timeSelect.value;
    const event = eventSelect.value;

    if (username === '') {
        alert('Please enter a username');
        return;
    }

    if (password === '2710') {
    } else if (password === '') {
        alert('Enter password');
        return;
    } else {
        alert('Enter valid password');
        return;
    }
    if(email==''){
        alert("Enter a valid email")
        return;
    }
    alert('Form verified successfully!');
});





