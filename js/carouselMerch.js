let currentSlideIndex1 = 0;
let currentSlideIndex2 = 0;

function showSlide(index, carouselNumber) {
    let slides, dots, currentSlideIndex;
    
    if (carouselNumber === 1) {
        slides = document.querySelectorAll('#carousel1 .carousel-item');
        dots = document.querySelectorAll('#carousel1 .dot');
        currentSlideIndex = currentSlideIndex1;
    } else if (carouselNumber === 2) {
        slides = document.querySelectorAll('#carousel2 .carousel-item');
        dots = document.querySelectorAll('#carousel2 .dot');
        currentSlideIndex = currentSlideIndex2;
    }

    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-currentSlideIndex * 100}%)`;
        dots[i].classList.toggle('active', i === currentSlideIndex);
    });

    if (carouselNumber === 1) {
        currentSlideIndex1 = currentSlideIndex;
    } else if (carouselNumber === 2) {
        currentSlideIndex2 = currentSlideIndex;
    }
}

function currentSlide(index, carouselNumber) {
    showSlide(index - 1, carouselNumber);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex1, 1);
    showSlide(currentSlideIndex2, 2);
});
