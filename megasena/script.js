function generateRandomNumber() {
    return Math.floor(Math.random() * 60) + 1; // Gera números de 1 a 60
}

function generateUniqueNumbers() {
    const numbers = new Set();

    while (numbers.size < 6) {
        const randomNumber = generateRandomNumber();
        numbers.add(randomNumber);
    }

    return Array.from(numbers);
}

function fillBalls() {
    const uniqueNumbers = generateUniqueNumbers();

    for (let i = 1; i <= 6; i++) {
        const ball = document.getElementById(`ball${i}`);
        ball.textContent = uniqueNumbers[i - 1];
    }
}

document.getElementById('generateNumbers').addEventListener('click', fillBalls);
