document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".slider-btn-next");
    const prevBtn = document.querySelector(".slider-btn-prev");
    const dotsContainer = document.querySelector(".dots-container");
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
     slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
     });
const dots = document.querySelectorAll(".dot");

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
    
}
function goToSlide(index) {
    currentSlide = index;
    slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    updateDots();
}
function nextSlide() {
    currentSlide = (currentSlide +1) % slideCount;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    goToSlide(currentSlide);
}
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
setInterval(nextSlide, 3000);

});