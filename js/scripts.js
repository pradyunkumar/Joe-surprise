document.addEventListener('DOMContentLoaded', (event) => {
    const boxes = document.querySelectorAll('.box');
    const messages = [
        "dis card is good for: 5 bobas on me :)",
        "dis card is good for: my everlasting love for u and commitment to be better for us :)",
        "dis card is good for: a fancy romantic dinner date + flowers"
    ];

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.innerText = messages[index];
            box.innerHTML = ''; // Clear the box content
            box.appendChild(messageElement);
            messageElement.style.display = 'block';
            
            let confettiOptions = {
                particleCount: 100,
                spread: 70
            };

            switch (index) {
                case 0:
                    confettiOptions.origin = { x: 0, y: 0.5 };
                    break;
                case 1:
                    confettiOptions.origin = { x: 0.5, y: 0.5 };
                    confettiOptions.spread = 360;
                    break;
                case 2:
                    confettiOptions.origin = { x: 1, y: 0.5 };
                    break;
            }

            confetti(confettiOptions);
        });
    });
});
