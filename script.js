
var loader = document.querySelector(".loader");

window.addEventListener("load", function() {
    
    if (loader) {
        loader.style.display = "none";
    }
});



const slides = document.querySelectorAll(".slide");
let counter = 0;
const slideWidth = document.querySelector('.fifth-first').clientWidth;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    if (counter > 0) {
        counter--;
        slideImage();
    }
};

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
    }
};

const slideImage = () => {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * slideWidth}px)`;
    });
    console.log(`Slide index: ${counter}`);
};

document.querySelector('.prev2').addEventListener('click', goPrev);
document.querySelector('.next2').addEventListener('click', goNext);



