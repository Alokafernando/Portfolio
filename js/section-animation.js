document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');


    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    function handleScroll() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });

        if (footer && isElementInViewport(footer)) {
            footer.style.opacity = '1';
            footer.style.transform = 'translateY(0)';
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            if (
                mouseX >= rect.left &&
                mouseX <= rect.right &&
                mouseY >= rect.top &&
                mouseY <= rect.bottom
            ) {
                const x = ((mouseX - rect.left) / rect.width) * 100;
                const y = ((mouseY - rect.top) / rect.height) * 100;

                section.style.setProperty('--x', `${x}%`);
                section.style.setProperty('--y', `${y}%`);
            }
        });
    });

});