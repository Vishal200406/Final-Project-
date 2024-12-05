function toggleEmailSubmenu() {
    const submenu = document.getElementById('emailSubmenu');
    submenu.classList.toggle('show'); // Toggle the 'show' class
}

//JavaScript 

    // Carousel Functionality
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // Next button
    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length; // Wrap around to the first item
        updateCarousel();
    });

    // Previous button
    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Wrap around to the last item
        updateCarousel();
    });

    // Update carousel position
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
