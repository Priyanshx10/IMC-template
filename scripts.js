document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    navToggle.addEventListener('change', function() {
        if (this.checked) {
            mobileNav.style.display = 'flex';
        } else {
            mobileNav.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Set the interval for automatic sliding (e.g., every 3 seconds)
    setInterval(nextSlide, 3000);

    // Add click event listeners to dots
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });
});