// Header

import { toggleMenuMobileMaterials, clearMenuMobileMaterials } from "./modules/header/toggleMenu.js";

const buttonMenuMobile = document.querySelector('.header-materials__btn-mobile');

buttonMenuMobile.addEventListener('change', toggleMenuMobileMaterials);
window.addEventListener('resize', clearMenuMobileMaterials);


// Aside - Topics

const buttonsTopicsList = document.querySelectorAll('.container-levels .list-item');
const subtopicLinks = document.querySelectorAll('.container-levels .subtopics__list a');

buttonsTopicsList.forEach(topicList => {
    topicList.addEventListener('click', function (event) {
        const subtopicsList = this.querySelector('.subtopics__list');
        const triangle = this.parentNode.querySelector('.bi-caret-right-fill');

        if (!event.target.classList.contains('list-item')) return


        if (subtopicsList) {
            triangle.classList.toggle('triangle-rotate');
            subtopicsList.classList.toggle('show-subtopics');
        }
    });
});

subtopicLinks.forEach(link => {
    link.addEventListener('click', () => {
        subtopicLinks.forEach(item => {
            item.classList.remove('active-topic');
        });

        link.classList.add('active-topic');
    });
});


// Aside - Content

const containerMaterial = document.querySelector('.container-material');

let materialsLoaded = {
    'alfabeto': false,
    'perguntas-comuns': false
};

async function getMaterials(path, key) {
    if (materialsLoaded[key]) return;  
    
    const response = await fetch(path);
    const jsonData = await response.json();

    materialsLoaded[key] = true;
    
    let contentHTML = jsonData.material;
    containerMaterial.innerHTML = contentHTML;
}

// Beginner Topics

const topicAlphabet = document.getElementById('topic-alphabet');
topicAlphabet.addEventListener('click', () => getMaterials('./assets/data/topicos-iniciantes/alfabeto.json', 'alfabeto'));


// Intermediate Topics

const topicCommonQuestions = document.getElementById('topic-common-questions');
topicCommonQuestions.addEventListener('click', () => getMaterials('./assets/data/topicos-intermediarios/perguntas-comuns.json', 'perguntas-comuns'));