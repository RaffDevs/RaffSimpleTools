let timerInterval;
let remainingTime = 1500;

const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const timerInput = document.getElementById('timer');

document.getElementById("backbutton").addEventListener("click", () => {
    window.history.back();
});

function startTimer() {
    startButton.disabled = true;
    pauseButton.disabled = false;
    timerInput.disabled = true;

    timerInterval = setInterval(function () {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = 'Tempo esgotado!';
            startButton.disabled = false;
            pauseButton.disabled = true;
        }

        remainingTime--;
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    pauseButton.disabled = true;
    timerInput.disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    remainingTime = parseInt(timerInput.value) * 60;
    timerDisplay.textContent = `${String(parseInt(timerInput.value)).padStart(2, '0')}:00`;
    startButton.disabled = false;
    pauseButton.disabled = true;
    timerInput.disabled = false;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
