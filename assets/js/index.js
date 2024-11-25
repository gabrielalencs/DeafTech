// header

import { toggleMenuMobile, clearMenuMobile } from "./modules/header/toggleMenu.js";

const buttonMenuMobile = document.querySelector('.header__btn-mobile');

buttonMenuMobile.addEventListener('change', toggleMenuMobile);
window.addEventListener('resize', clearMenuMobile);

const buttonLoginUser = document.querySelector('.header__btn-login');
const containerLogin = document.querySelector('.container-login');
const buttonCloseLogin = document.querySelector('.close-btn-login');

buttonLoginUser.addEventListener('click', () => {
    containerLogin.classList.remove('hidden-login');
});

buttonCloseLogin.addEventListener('click', () => {
    containerLogin.classList.add('hidden-login');
});