// Hamburger
const burger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Slider logic
let slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(nextSlide, 5000);

// Swipe Interaction
let startX = 0;
document.getElementById('slider-container').addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

document.getElementById('slider-container').addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide(); // Swipe Left
    if (endX - startX > 50) { // Swipe Right
        slides[current].classList.remove('active');
        current = (current - 1 + slides.length) % slides.length;
        slides[current].classList.add('active');
    }
});