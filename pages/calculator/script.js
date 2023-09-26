let currentInput = '';
let currentOperator = '';
let previousInput = '';
let resultShown = false;

function clearDisplay() {
    document.getElementById('result').value = '0';
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    resultShown = false;
}

function setOnDisplay(value) {
    if (resultShown) {
        clearDisplay();
    }

    if (value === '.' && currentInput.includes('.')) {
        return;
    }

    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function calcResult() {
    if (resultShown) {
        return;
    }

    previousInput = currentInput;

    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
        resultShown = true;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
        resultShown = true;
    }
}

document.getElementById("backbutton").addEventListener("click", () => {
    window.history.back();
});