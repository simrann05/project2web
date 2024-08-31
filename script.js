let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * (30 + 4); // Adjust based on slide size (30%) and margin (2% on each side)
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, idx) => {
        slide.style.opacity = '0.5'; // Default opacity
        slide.style.transform = 'scale(0.8)'; // Default scale

        if (idx === currentIndex) {
            slide.style.opacity = '0.6'; // Slightly dull for the current slide
            slide.style.transform = 'scale(0.9)'; // Slightly larger for the current slide
        } else if (idx === (currentIndex + 1) % totalSlides) {
            slide.style.opacity = '1'; // Bright for the next slide
            slide.style.transform = 'scale(1.1)'; // Larger scale for the next slide
        } else if (idx === (currentIndex + 2) % totalSlides) {
            slide.style.opacity = '0.5'; // Slightly dull for the next-to-next slide
            slide.style.transform = 'scale(0.8)'; // Default scale for the next-to-next slide
        }
    });
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Optional: Automatically move to the next slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
