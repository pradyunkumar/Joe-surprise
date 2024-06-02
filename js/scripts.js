document.addEventListener('DOMContentLoaded', (event) => {
    const boxes = document.querySelectorAll('.box');
    const messages = [
        "You are amazing!",
        "You make me smile every day!",
        "I love you more than words can say!"
    ];

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.innerText = messages[index];
            box.innerHTML = ''; // Clear the box content
            box.appendChild(messageElement);
            messageElement.style.display = 'block';
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 1.0 }
            });
        });
    });
});

