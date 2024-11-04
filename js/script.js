var sidebar = document.getElementById('sidebar');
var showSidebar = false;
var main = document.querySelector('main');
var header = document.querySelector('header');
var desenvoltech = document.getElementById('desenvoltech');

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        sidebar.style.marginLeft = '0';
        main.style.filter = 'blur(2px)';
    } else {
        sidebar.style.marginLeft = '-100vw';
        main.style.filter = 'none';
    }
}

function closeSidebar() {
    toggleSidebar();
}

// Função para animação da header quando ocorrer a rolagem
const shrinkOn = 10; // Distância em pixels para iniciar a animação

window.addEventListener('scroll', () => {
    if (window.scrollY > shrinkOn) {
        header.classList.add('shrink');
        sidebar.classList.add('shrink');
        main.classList.add('shrink');
        desenvoltech.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
        sidebar.classList.remove('shrink');
        main.classList.remove('shrink');
        desenvoltech.classList.remove('shrink');
    }
});

const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const section3 = document.querySelector('.section3');
const totalCards = cards.length;
const h3Section3 = document.querySelector('.h3Section3')
let currentIndex = 0;

// Função para mostrar o card atual
function showCurrentCard() {
    carousel.style.transform = `translateX(-${currentIndex * 100.7}vw)`; // Muda o card atual
}

// Função para mover para o próximo card
function nextCard() {
    currentIndex = (currentIndex + 1) % totalCards;
    showCurrentCard();
    h3Section3.style.display = 'none';
}

// Função para mover para o card anterior
function prevCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    showCurrentCard();
    h3Section3.style.display = 'none';
}

// Adicionar suporte ao toque para dispositivos móveis apenas na área da section3
let startX;
let isMoving = false;

section3.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isMoving = true;
});

section3.addEventListener('touchmove', (e) => {
    if (!isMoving) return;
    const moveX = e.touches[0].clientX;
    const diffX = startX - moveX;

    const threshold = 30; // Limiar para considerar o movimento de swipe válido

    if (diffX > threshold) {
        nextCard();
        isMoving = false;
    } else if (diffX < -threshold) {
        prevCard();
        isMoving = false;
    }
});

// Reseta o movimento ao final do toque
section3.addEventListener('touchend', () => {
    isMoving = false;
});

// Inicializa o carrossel mostrando o primeiro card
showCurrentCard();