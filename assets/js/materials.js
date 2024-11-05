// Header

import { toggleMenuMobileMaterials, clearMenuMobileMaterials } from "./modules/header/toggleMenu.js";

const buttonMenuMobile = document.querySelector('.header-materials__btn-mobile');

buttonMenuMobile.addEventListener('change', toggleMenuMobileMaterials);
window.addEventListener('resize', clearMenuMobileMaterials);


// Aside - Topics

const buttonsTopicsList = document.querySelectorAll('.container-levels .list-item');

buttonsTopicsList.forEach(topicList => {
    topicList.addEventListener('click', function () {
        const subtopicsList = this.querySelector('.subtopics__list');
        const triangle = this.parentNode.querySelector('.bi-caret-right-fill');

        
        if (subtopicsList) {
            triangle.classList.toggle('triangle-rotate');
            subtopicsList.classList.toggle('show-subtopics');
        }
    });
});