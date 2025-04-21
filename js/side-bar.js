document.addEventListener('DOMContentLoaded', function() {
    const navBtn = document.getElementById('nav-btn');
    const navLinks = document.getElementById('nav-links');

    function isMobileView() {
        return window.innerWidth <= 768;
    }

    navBtn.addEventListener('click', function(event) {
        navLinks.classList.toggle('active');

        if (isMobileView()) {
            navBtn.style.display = 'none';
        }
    });

    navLinks.addEventListener('click', function(event) {

        const rect = navLinks.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        if (clickX >= rect.width - 50 && clickY <= 50) {
            navLinks.classList.remove('active');

            if (isMobileView()) {
                navBtn.style.display = 'block';
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && event.target !== navBtn) {
            navLinks.classList.remove('active');

            if (isMobileView()) {
                navBtn.style.display = 'block';
            }
        }
    });

    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');

            if (isMobileView()) {
                navBtn.style.display = 'block';
            }
        });
    });

    window.addEventListener('resize', function() {
        if (!isMobileView()) {
            navBtn.style.display = 'none';
        } else {
            navBtn.style.display = navLinks.classList.contains('active') ? 'none' : 'block';
        }
    });

    if (!isMobileView()) {
        navBtn.style.display = 'none';
    }
});