var slideIndex = 1;
showSlides(slideIndex);

function change(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("models__model");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        // slides[i].classList.remove("models__model--active");
        slides[i].style.display = "none"
    }
    slides[slideIndex-1].style.display = "block";
}
