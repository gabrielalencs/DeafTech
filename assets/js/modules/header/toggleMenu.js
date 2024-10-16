const containerMenuMobile = document.querySelector('.header__content');
const buttonMenuMobileCheckbox = document.querySelector('.header__btn-mobile input');

const toggleMenuMobile = () => containerMenuMobile.classList.toggle('menu-active');


const containerMenuMobileMaterials = document.querySelector('.header-materials__content');
const buttonMenuMobileCheckboxMaterials = document.querySelector('.header-materials__btn-mobile input');

const toggleMenuMobileMaterials = () => containerMenuMobileMaterials.classList.toggle('menu-active');


const clearMenuMobile = () => {
    if (window.innerWidth >= 768) {
        containerMenuMobile.classList.remove('menu-active');
        buttonMenuMobileCheckbox.checked = false;
    }
};

const clearMenuMobileMaterials = () => {
    if (window.innerWidth >= 768) {
        containerMenuMobileMaterials.classList.remove('menu-active');
        buttonMenuMobileCheckboxMaterials.checked = false;
    }
};


export { toggleMenuMobile, toggleMenuMobileMaterials, clearMenuMobile, clearMenuMobileMaterials }