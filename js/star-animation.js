const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 200;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.2 + 0.5,
            alpha: Math.random(),
            alphaChange: 0.005 + Math.random() * 0.01
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(41, 228, 235, ${star.alpha})`; // 29E4EB glow
        ctx.shadowColor = '#29E4EB';
        ctx.shadowBlur = 8;
        ctx.fill();

        // Twinkling
        star.alpha += star.alphaChange;
        if (star.alpha <= 0 || star.alpha >= 1) {
            star.alphaChange *= -1;
        }
    }
    requestAnimationFrame(drawStars);
}

window.addEventListener('resize', () => {
    resizeCanvas();
    createStars();
});

resizeCanvas();
createStars();
drawStars();