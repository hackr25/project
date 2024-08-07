let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;

showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    showSlides(slideIndex);
}

function showSlides(index) {
    const carouselTrack = document.querySelector(".carousel-track");
    const slideWidth = slides[0].clientWidth;
    carouselTrack.style.transform = `translateX(${-slideWidth * index}px)`;
}
