// header

import { toggleMenuMobile, clearMenuMobile } from "./modules/header/toggleMenu.js";

const buttonMenuMobile = document.querySelector('.header__btn-mobile');

buttonMenuMobile.addEventListener('change', toggleMenuMobile);
window.addEventListener('resize', clearMenuMobile);