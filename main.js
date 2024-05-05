const body = document.querySelector('body');
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', function () {
    if (this.checked) {
        body.setAttribute('data-tema', 'dark');
    } else {
        body.removeAttribute('data-tema');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if (email.toLowerCase().trim().endsWith('@gmail.com') && senha.trim() !== '') {
            window.location.href = 'https://andr3yvt.github.io/criador-de-senhas/';
        } else {
            alert('Por favor, insira um email do Gmail e uma senha válida.');
        }
    });
});
