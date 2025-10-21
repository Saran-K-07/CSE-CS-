// Matrix background effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
const matrixArray = matrixChars.split("");
const fontSize = 15;
const columns = Math.floor(canvas.width / fontSize);
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * canvas.height / fontSize);
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

document.getElementById('redirects-btn').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('back-btn').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    const redirectsBtn = document.getElementById('redirects-btn');
    navbar.style.display = '';
    redirectsBtn.style.display = '';
});