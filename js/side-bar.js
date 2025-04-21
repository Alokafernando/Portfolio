document.addEventListener('DOMContentLoaded', function() {
    const navBtn = document.getElementById('nav-btn');
    const navLinks = document.getElementById('nav-links');
    const closeBtn = document.querySelector('#nav-links.active::before'); // This won't work as expected

    navBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        navLinks.classList.toggle('active');
    });

    // Handle the close button (×) click
    navLinks.addEventListener('click', function(event) {
        // Get the clicked position within the navLinks element
        const rect = navLinks.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        // Check if click is in the top-right corner where the × is located
        // Adjust these values based on your CSS positioning
        if (clickX >= rect.width - 50 && clickY <= 50) {
            navLinks.classList.remove('active');
        }
    });

    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && event.target !== navBtn) {
            navLinks.classList.remove('active');
        }
    });

    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});