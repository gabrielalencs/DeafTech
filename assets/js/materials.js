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
        if (!event.target.classList.contains('list-item')) return;

        const subtopicsList = this.querySelector('.subtopics__list');
        const triangle = this.querySelector('.bi-caret-right-fill');


        buttonsTopicsList.forEach(item => {
            const otherSubtopics = item.querySelector('.subtopics__list');
            const otherTriangle = item.querySelector('.bi-caret-right-fill');

            if (otherSubtopics !== subtopicsList) {
                otherSubtopics?.classList.remove('show-subtopics');
                otherTriangle?.classList.remove('triangle-rotate');
            }
        });


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

const containerMaterial = document.querySelector('.main-content');

let materialsLoaded = {
    'alfabeto': false,
    'perguntas-comuns': false,
    'numeros-e-meses': false,
    'comprimentos-e-saudações': false,
    'familia-e-relações': false,
};
let lastTopic = null;

const loadingContainer = document.querySelector('.loading');

async function getMaterials(path, key) {
    if (materialsLoaded[key] && lastTopic === key) return;

    window.scrollTo(0, 0)
    containerMaterial.innerHTML = '';
    loadingContainer.style.display = 'block';

    const response = await fetch(path);
    const jsonData = await response.json();

    materialsLoaded[key] = true;
    lastTopic = key;
    loadingContainer.style.display = 'none';

    let contentHTML = jsonData.material;
    containerMaterial.innerHTML = contentHTML;
}

// Beginner Topics

const topicAlphabet = document.getElementById('topic-alphabet');
topicAlphabet.addEventListener('click', () => getMaterials('./assets/data/topicos-iniciantes/alfabeto.json', 'alfabeto'));

const topicNumbers = document.getElementById('topic-numbers');
topicNumbers.addEventListener('click', () => getMaterials('./assets/data/topicos-iniciantes/numeros-e-meses.json', 'numeros-e-meses'));

const topicGreetings = document.getElementById('topic-greetings');
topicGreetings.addEventListener('click', () => getMaterials('./assets/data/topicos-iniciantes/saudacoes.json', 'comprimentos-e-saudações'));


// Intermediate Topics

const topicCommonQuestions = document.getElementById('topic-common-questions');
topicCommonQuestions.addEventListener('click', () => getMaterials('./assets/data/topicos-intermediarios/perguntas-comuns.json', 'perguntas-comuns'));

const topicRelations = document.getElementById('topic-relations');
topicRelations.addEventListener('click', () => getMaterials('./assets/data/topicos-intermediarios/familia-relacoes-pessoais.json', 'familia-e-relações'));