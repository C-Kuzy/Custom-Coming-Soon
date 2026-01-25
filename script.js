// Add random glitch intensity changes
const glitchElement = document.querySelector('.glitch');

function randomGlitch() {
    const intensity = Math.random() * 5;
    glitchElement.style.textShadow = `
        ${intensity}px 0 #ff0000,
        ${-intensity}px 0 #00ffff,
        0 ${intensity}px #ffff00
    `;
    
    // Reset after a short time
    setTimeout(() => {
        glitchElement.style.textShadow = '';
    }, 50);
}

// Trigger random glitches
setInterval(() => {
    if (Math.random() > 0.7) {
        randomGlitch();
    }
}, 200);

// Add occasional screen shake effect
function screenShake() {
    const container = document.querySelector('.glitch-container');
    const shakeAmount = Math.random() * 10 - 2;
    container.style.transform = `translate(${shakeAmount}px, ${shakeAmount}px)`;
    
    setTimeout(() => {
        container.style.transform = '';
    }, 50);
}

setInterval(() => {
    if (Math.random() > 0.75) {
        screenShake();
    }
}, 300);
