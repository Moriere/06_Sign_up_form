const password = document.getElementById('pwd');
const passwordConfirm = document.getElementById('pwd_confirm');
const errorMessage = document.querySelector(".pwd_confirm");

passwordConfirm.addEventListener('input', () => {
    if (password.value !== passwordConfirm.value) {
        passwordConfirm.setCustomValidity('passwords dont match');
        if (passwordConfirm.value.length < 10) {
            errorMessage.innerText = 'Password must be longer than 10 characters.'
        } else {
            errorMessage.innerText = 'Passwords must match.';
        }
    } else {
        passwordConfirm.setCustomValidity('');
    }
});

password.addEventListener('input', () => {
    if (password.value !== passwordConfirm.value) {
        passwordConfirm.setCustomValidity('passwords dont match');
        if (passwordConfirm.value.length < 10) {
            errorMessage.innerText = 'Password must be longer than 10 characters.'
        } else {
            errorMessage.innerText = 'Passwords must match.';
        }
    } else {
        passwordConfirm.setCustomValidity('');
    }
});