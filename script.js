// JavaScript to toggle password visibility
const togglePassword = document.querySelector('#toggle');
const password = document.querySelector('#password');
const showImg = document.querySelector('#show');
const hideImg = document.querySelector('#hide');

togglePassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // toggle image display
    if (type === 'password') {
        hide.style.display = 'none';
        show.style.display = 'inline-block';
    } else {
        show.style.display = 'none';
        hide.style.display = 'inline-block';
    }
});
