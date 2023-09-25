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

function appendToDisplay(value) {
    if (resultShown) {
        clearDisplay();
    }

    if (value === '.' && currentInput.includes('.')) {
        return;
    }

    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function calculateResult() {
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
