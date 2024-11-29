// header

import { toggleMenuMobile, clearMenuMobile } from "./modules/header/toggleMenu.js";

const buttonMenuMobile = document.querySelector('.header__btn-mobile');

buttonMenuMobile.addEventListener('change', toggleMenuMobile);
window.addEventListener('resize', clearMenuMobile);

const registerButton = document.querySelector('.container-register .login-button button');
const loginButton = document.querySelector('.container-login .login-button button'); 
const registerInputs = document.querySelectorAll('.container-register .login-input'); 
const loginInputs = document.querySelectorAll('.container-login .login-input'); 

const userName = document.querySelector('.user-name');
const buttonsLoginHeader = document.querySelector('.header__buttons')
const containerLoginUserHeader = document.querySelector('.login-user'); 

const buttonLoginUser = document.querySelector('.header__btn-login');
const containerLogin = document.querySelector('.container-login');
const buttonCloseLogin = document.querySelector('.close-btn-login');

buttonLoginUser.addEventListener('click', () => {
    containerLogin.classList.remove('hidden');
    document.body.style.overflowY = 'hidden';
});

buttonCloseLogin.addEventListener('click', () => {
    containerLogin.classList.add('hidden');
    document.body.style.overflowY = 'auto';
    loginInputs.forEach(input => input.value = '');
});


const buttonRegisterUser = document.querySelector('.header__btn-register');
const containerRegister = document.querySelector('.container-register');
const buttonCloseRegister = document.querySelector('.close-btn-register');

buttonRegisterUser.addEventListener('click', () => {
    containerRegister.classList.remove('hidden');
    document.body.style.overflowY = 'hidden';
});

buttonCloseRegister.addEventListener('click', () => {
    containerRegister.classList.add('hidden');
    document.body.style.overflowY = 'auto';
    registerInputs.forEach(input => input.value = '');
});



registerButton.addEventListener('click', () => {
    const name = registerInputs[0].value.trim();
    const email = registerInputs[1].value.trim();
    const password = registerInputs[2].value.trim();
    const confirmPassword = registerInputs[3].value.trim();

    if (!name) {
        alert('Por favor, insira o seu nome.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    const user = {
        name,
        email,
        password,
    };

    saveUser(user);

    registerInputs.forEach(input => (input.value = ''));
    alert('Usuário cadastrado com sucesso!');
    containerRegister.classList.add('hidden');
    document.body.style.overflowY = 'auto';
    registerInputs.forEach(input => input.value = '');
});



document.addEventListener('DOMContentLoaded', () => {

    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if (loggedUser) {
        showLoggedUser(loggedUser.name);
    }
});


loginButton.addEventListener('click', () => {
    const email = loginInputs[1].value.trim();
    const password = loginInputs[2].value.trim();

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    if (!password) {
        alert('Por favor, insira a sua senha.');
        return;
    }

    const user = findUser(email);

    if (!user) {
        alert('Usuário não encontrado. Por favor, cadastre-se.');
        return;
    }

    if (user.password !== password) {
        alert('Senha incorreta. Tente novamente.');
        return;
    }

    localStorage.setItem('loggedUser', JSON.stringify(user));

    alert(`Bem-vindo, ${user.name}!`);
    containerLogin.classList.add('hidden');
    document.body.style.overflowY = 'auto';
    loginInputs.forEach(input => input.value = '');

    showLoggedUser(user.name);
});

function showLoggedUser(name) {
    buttonsLoginHeader.classList.add('hidden');
    containerLoginUserHeader.classList.remove('hidden');
    userName.classList.remove('hidden');
    userName.querySelector('p').textContent = `Bem-vindo, ${name}!`;
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}

function saveUser(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(u => u.email === user.email);

    if (userExists) {
        alert('Já existe um usuário cadastrado com esse email.');
        return;
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}


function findUser(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email);
}


const logoutButton = document.querySelector('.button-logout'); 

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedUser');

    buttonsLoginHeader.classList.remove('hidden');
    containerLoginUserHeader.classList.add('hidden');
    userName.classList.add('hidden');
    userName.querySelector('p').textContent = '';
});