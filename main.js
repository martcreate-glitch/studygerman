const words = [
    { german: "Apfel", korean: "사과" },
    { german: "Haus", korean: "집" },
    { german: "Auto", korean: "자동차" },
    { german: "Buch", korean: "책" },
    { german: "Wasser", korean: "물" },
    { german: "Brot", korean: "빵" },
    { german: "Schule", korean: "학교" },
    { german: "Freund", korean: "친구" },
    { german: "Zeit", korean: "시간" },
    { german: "Liebe", korean: "사랑" }
];

let currentIndex = 0;
let score = 0;
let total = 0;

const wordDisplay = document.getElementById('word-display');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const scoreSpan = document.getElementById('score');
const totalSpan = document.getElementById('total');
const resetBtn = document.getElementById('reset-btn');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function nextQuestion() {
    if (currentIndex >= words.length) {
        wordDisplay.textContent = "끝!";
        answerInput.style.display = "none";
        submitBtn.style.display = "none";
        feedback.textContent = "모든 문제를 풀었습니다.";
        return;
    }
    
    wordDisplay.textContent = words[currentIndex].german;
    answerInput.value = "";
    answerInput.focus();
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = words[currentIndex].korean;
    
    total++;
    if (userAnswer === correctAnswer) {
        score++;
        feedback.textContent = "정답입니다! 🎉";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = `틀렸습니다. 정답은 '${correctAnswer}' 입니다.`;
        feedback.className = "feedback incorrect";
    }
    
    scoreSpan.textContent = score;
    totalSpan.textContent = total;
    
    currentIndex++;
    setTimeout(nextQuestion, 1500);
}

submitBtn.addEventListener('click', checkAnswer);
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
});

resetBtn.addEventListener('click', () => {
    currentIndex = 0;
    score = 0;
    total = 0;
    scoreSpan.textContent = "0";
    totalSpan.textContent = "0";
    feedback.textContent = "";
    answerInput.style.display = "inline-block";
    submitBtn.style.display = "inline-block";
    shuffle(words);
    nextQuestion();
});

// Start
shuffle(words);
nextQuestion();
