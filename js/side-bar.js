
    document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the elements
    const navBtn = document.getElementById('nav-btn');
    const navLinks = document.getElementById('nav-links');

    // Toggle navigation when button is clicked
    navBtn.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click from immediately closing the menu
    navLinks.classList.toggle('active');
});

    // Close navigation when clicking elsewhere on the page
    document.addEventListener('click', function(event) {
    if (!navLinks.contains(event.target) && event.target !== navBtn) {
    navLinks.classList.remove('active');
}
});

    // Optional: Close menu when clicking a link (for single page navigation)
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
    link.addEventListener('click', function() {
    navLinks.classList.remove('active');
});
});
});
