const containerMenuMobile = document.querySelector('.header__content');
const buttonMenuMobileCheckbox = document.querySelector('.header__btn-mobile input');

const toggleMenuMobile = () => containerMenuMobile.classList.toggle('menu-active');

const clearMenuMobile = () => {
    if (window.innerWidth >= 768) {
        containerMenuMobile.classList.remove('menu-active');
        buttonMenuMobileCheckbox.checked = false;
    }
};

export { toggleMenuMobile, clearMenuMobile }