const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');

    const nextSlide = (currentSlide + n + slides.length) % slides.length;
    slides[nextSlide].classList.add(n > 0 ? 'next' : 'previous');
    slides[nextSlide].offsetWidth; // Trigger reflow to enable CSS transition
    slides[nextSlide].classList.add('active');
    slides[currentSlide].classList.add(n > 0 ? 'previous' : 'next');

    currentSlide = nextSlide;

    setTimeout(() => {
        slides.forEach(slide => slide.classList.remove('previous', 'next'));
    }, 600); // Transition duration is 0.6 seconds (600 ms)
}

document.querySelector('.prev').addEventListener('click', () => showSlide(-1));
document.querySelector('.next').addEventListener('click', () => showSlide(1));

// Show the first slide initially
showSlide(0);
