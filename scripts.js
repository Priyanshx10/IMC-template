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

document.addEventListener('DOMContentLoaded', function() {
    const leaders = document.querySelectorAll('.leader');
    let currentIndex = 0;

    function showLeader(index) {
        leaders.forEach((leader, i) => {
            leader.classList.toggle('active', i === index);
        });
    }

    function nextLeader() {
        currentIndex = (currentIndex + 1) % leaders.length; // Increment index and wrap around
        showLeader(currentIndex);
    }

    // Show the first leader initially
    showLeader(currentIndex);

    // Change leader every 4 seconds
    setInterval(nextLeader, 4000);
});

// Select all slides and navigation dots
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.navigation-dot');

let currentIndex = 0; // Initialize the current slide index

// Function to show the slide at the current index
function showSlide(index) {
    // Hide all slides and remove active class from all dots
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });

    // Show the current slide and highlight the corresponding dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Increment index and wrap around
    showSlide(currentIndex);
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// Optional: Add event listeners to dots for manual navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index; // Set current index to the clicked dot's index
        showSlide(currentIndex);
    });
});

// Initial display of the first slide
showSlide(currentIndex);