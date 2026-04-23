//слайдер фона .promo
const slides = [
    '/images/promo.jpg',
    '/images/specialists1.jpg',
    '/images/specialists2.jpg'
];

let currentIndex = 0;
const promo = document.querySelector('.promo');
const span = document.querySelector('.promo__arrows span');
const prevArrow = document.querySelector('.promo__arrows svg:first-child');
const nextArrow = document.querySelector('.promo__arrows svg:last-child');

function changeBackground(index) {
    promo.style.setProperty('--promo-bg', `url('${slides[index]}')`);
    span.textContent = `${index + 1}/${slides.length}`;
}

changeBackground(0);

prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    changeBackground(currentIndex);
});

nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    changeBackground(currentIndex);
});


// слайдер карточек
const cardsContainer = document.querySelector('.offers__cards');
const prevBtn = document.querySelector('.offers__button-pre');
const nextBtn = document.querySelector('.offers__button-next');
const paginationSpan = document.querySelector('.offers__buttons span');
    
const items = document.querySelectorAll('.offers__item');
const itemsPerView = 4;
const totalItems = items.length;
const totalPages = Math.ceil(totalItems / itemsPerView);
let currentPage = 1;
    
function updateSlider() {
    const index = (currentPage - 1) * itemsPerView;
    const itemWidth = items[0].offsetWidth;
    const gap = 32;
    const step = (itemWidth + gap) * index;
    cardsContainer.style.transform = `translateX(-${step}px)`;
    paginationSpan.textContent = `${currentPage}/${totalPages}`;
}

prevBtn.addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', function() {
    if (currentPage < totalPages) {
        currentPage++;
        updateSlider();
    }
});

cardsContainer.style.transition = 'transform 0.5s ease';
updateSlider();


