
const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
}

function displayNumbers(numbers) {
    numberElements.forEach((element, index) => {
        element.textContent = numbers[index];
    });
}

function generateAndDisplayNumbers() {
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
}

generateBtn.addEventListener('click', generateAndDisplayNumbers);

// Initial generation on page load
window.addEventListener('load', generateAndDisplayNumbers);
