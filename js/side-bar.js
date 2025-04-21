document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the elements
    const navBtn = document.getElementById('nav-btn');
    const navLinks = document.getElementById('nav-links');

    // Function to check if viewport is mobile size
    function isMobileView() {
        return window.innerWidth <= 768;
    }

    // Toggle navigation when button is clicked
    navBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from immediately closing the menu
        navLinks.classList.toggle('active');

        // Hide the nav button when sidebar is open ONLY on mobile
        if (isMobileView()) {
            navBtn.style.display = 'none';
        }
    });

    // Add click event directly to nav-links to handle the X button click
    navLinks.addEventListener('click', function(event) {
        // Calculate click position relative to navLinks
        const rect = navLinks.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        // Check if click was in the top-right corner where the X is
        if (clickX >= rect.width - 50 && clickY <= 50) {
            navLinks.classList.remove('active');

            // Show the nav button again when sidebar is closed ONLY on mobile
            if (isMobileView()) {
                navBtn.style.display = 'block';
            }
        }
    });

    // Close navigation when clicking elsewhere on the page
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && event.target !== navBtn) {
            navLinks.classList.remove('active');

            // Show the nav button again when sidebar is closed ONLY on mobile
            if (isMobileView()) {
                navBtn.style.display = 'block';
            }
        }
    });

    // Close menu when clicking a link
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');

            // Show the nav button again when sidebar is closed ONLY on mobile
            if (isMobileView()) {
                navBtn.style.display = 'block';
            }
        });
    });

    // Handle resize events to manage button visibility
    window.addEventListener('resize', function() {
        if (!isMobileView()) {
            // In desktop view, button should remain visible regardless of menu state
            navBtn.style.display = 'none';
        } else {
            // In mobile view, button visibility depends on menu state
            navBtn.style.display = navLinks.classList.contains('active') ? 'none' : 'block';
        }
    });

    // Initial setup based on viewport size
    if (!isMobileView()) {
        navBtn.style.display = 'none';
    }
});