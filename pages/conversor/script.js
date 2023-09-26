function applyCurrencyMask(input) {
    input.addEventListener('input', function () {
        const numericValue = this.value.replace(/\D/g, '');

        const formattedValue = (parseFloat(numericValue) / 100).toFixed(2);

        this.value = formattedValue;
    });
}

applyCurrencyMask(document.getElementById('amount'));
applyCurrencyMask(document.getElementById('usdRate'));
applyCurrencyMask(document.getElementById('euroRate'));

document.getElementById('convertToUSD').addEventListener('click', function () {
    const usdRate = parseFloat(document.getElementById('usdRate').value);
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(usdRate) || isNaN(amount)) {
        document.getElementById('result').textContent = 'Insira valores válidos para a cotação e o valor em reais.';
        return;
    }

    const convertedAmount = amount / usdRate;

    document.getElementById('result').textContent = `${amount.toFixed(2)} reais equivalem a ${convertedAmount.toFixed(2)} dólares.`;
});

document.getElementById('convertToEuro').addEventListener('click', function () {
    const euroRate = parseFloat(document.getElementById('euroRate').value);
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(euroRate) || isNaN(amount)) {
        document.getElementById('result').textContent = 'Insira valores válidos para a cotação e o valor em reais.';
        return;
    }

    const convertedAmount = amount / euroRate;

    document.getElementById('result').textContent = `${amount.toFixed(2)} reais equivalem a ${convertedAmount.toFixed(2)} euros.`;
});

document.getElementById("backbutton").addEventListener("click", () => {
    window.history.back();
});