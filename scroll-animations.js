
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.card');
    const skills = document.querySelectorAll('.skills-card');
    const timelineItems = document.querySelectorAll('.timeline-item');

    const heroImg = document.querySelector('.hero-img');

    const navbar = document.getElementById('nav-bar');

    createParticles();

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (heroImg) {
            heroImg.style.transform = `translate(-50%, ${-50 + scrollPosition * 0.05}%)`;
        }

        if (scrollPosition > 100) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.borderColor = '#29E4EB';
            navbar.style.boxShadow = '0 5px 25px rgba(41, 228, 235, 0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
            navbar.style.borderColor = '#29E4EB';
            navbar.style.boxShadow = '0 5px 15px rgba(41, 228, 235, 0.3)';
        }

        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
                section.classList.add('section-active');

                if (!section.classList.contains('ripple-added')) {
                    createRippleEffect(section);
                    section.classList.add('ripple-added');
                }
            }
        });

        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight * 0.8) {
                setTimeout(() => {
                    card.classList.add('card-visible');
                }, index * 150);
            }
        });

        skills.forEach((skill, index) => {
            const skillTop = skill.getBoundingClientRect().top;
            if (skillTop < window.innerHeight * 0.8) {
                setTimeout(() => {
                    skill.classList.add('skill-animate');
                }, index * 100);
            }
        });

        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < window.innerHeight * 0.8) {
                setTimeout(() => {
                    item.classList.add('timeline-item-visible');
                }, index * 200);
            }
        });
    });

    window.dispatchEvent(new Event('scroll'));

    function createParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-container';
        document.body.appendChild(particleContainer);

        for (let i = 0; i < 50; i++) {
            createParticle(particleContainer);
        }
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const posX = Math.random() * 100;
        const posY = Math.random() * 100;

        const size = Math.random() * 5 + 2;

        const duration = Math.random() * 20 + 10;

        const delay = Math.random() * 5;

        const opacity = Math.random() * 0.5 + 0.1;

        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;

        container.appendChild(particle);
    }

    function createRippleEffect(element) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 2000);
    }

    document.querySelectorAll('section').forEach(section => {
        section.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPercent = x / rect.width;
            const yPercent = y / rect.height;

            const tiltX = (xPercent - 0.5) * 5;
            const tiltY = (yPercent - 0.5) * 5;

            this.style.transform = `perspective(1000px) rotateX(${-tiltY}deg) rotateY(${tiltX}deg) scale(1.02)`;

            this.style.setProperty('--x', `${xPercent * 100}%`);
            this.style.setProperty('--y', `${yPercent * 100}%`);
        });

        section.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});