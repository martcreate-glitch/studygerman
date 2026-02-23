const allWords = [
    // A1 Nouns
    { german: "Apfel", korean: "사과", level: "A1", type: "noun", gender: "der" },
    { german: "Haus", korean: "집", level: "A1", type: "noun", gender: "das" },
    { german: "Auto", korean: "자동차", level: "A1", type: "noun", gender: "das" },
    { german: "Buch", korean: "책", level: "A1", type: "noun", gender: "das" },
    { german: "Wasser", korean: "물", level: "A1", type: "noun", gender: "das" },
    { german: "Brot", korean: "빵", level: "A1", type: "noun", gender: "das" },
    { german: "Schule", korean: "학교", level: "A1", type: "noun", gender: "die" },
    { german: "Freund", korean: "친구", level: "A1", type: "noun", gender: "der" },
    { german: "Zeit", korean: "시간", level: "A1", type: "noun", gender: "die" },
    { german: "Liebe", korean: "사랑", level: "A1", type: "noun", gender: "die" },
    { german: "Mann", korean: "남자", level: "A1", type: "noun", gender: "der" },
    { german: "Frau", korean: "여자", level: "A1", type: "noun", gender: "die" },
    { german: "Kind", korean: "아이", level: "A1", type: "noun", gender: "das" },
    { german: "Vater", korean: "아버지", level: "A1", type: "noun", gender: "der" },
    { german: "Mutter", korean: "어머니", level: "A1", type: "noun", gender: "die" },
    { german: "Stadt", korean: "도시", level: "A1", type: "noun", gender: "die" },
    { german: "Name", korean: "이름", level: "A1", type: "noun", gender: "der" },
    { german: "Tag", korean: "날", level: "A1", type: "noun", gender: "der" },
    { german: "Woche", korean: "주", level: "A1", type: "noun", gender: "die" },
    { german: "Monat", korean: "달", level: "A1", type: "noun", gender: "der" },
    { german: "Jahr", korean: "년", level: "A1", type: "noun", gender: "das" },
    { german: "Hand", korean: "손", level: "A1", type: "noun", gender: "die" },
    { german: "Auge", korean: "눈", level: "A1", type: "noun", gender: "das" },
    { german: "Mund", korean: "입", level: "A1", type: "noun", gender: "der" },
    { german: "Kopf", korean: "머리", level: "A1", type: "noun", gender: "der" },
    { german: "Essen", korean: "음식", level: "A1", type: "noun", gender: "das" },
    { german: "Tisch", korean: "책상", level: "A1", type: "noun", gender: "der" },
    { german: "Stuhl", korean: "의자", level: "A1", type: "noun", gender: "der" },
    { german: "Bett", korean: "침대", level: "A1", type: "noun", gender: "das" },
    { german: "Tür", korean: "문", level: "A1", type: "noun", gender: "die" },
    { german: "Fenster", korean: "창문", level: "A1", type: "noun", gender: "das" },
    { german: "Sonne", korean: "태양", level: "A1", type: "noun", gender: "die" },
    { german: "Mond", korean: "달", level: "A1", type: "noun", gender: "der" },
    { german: "Baum", korean: "나무", level: "A1", type: "noun", gender: "der" },
    { german: "Blume", korean: "꽃", level: "A1", type: "noun", gender: "die" },
    { german: "Hund", korean: "개", level: "A1", type: "noun", gender: "der" },
    { german: "Katze", korean: "고양이", level: "A1", type: "noun", gender: "die" },
    { german: "Vogel", korean: "새", level: "A1", type: "noun", gender: "der" },
    { german: "Milch", korean: "우유", level: "A1", type: "noun", gender: "die" },
    { german: "Kaffee", korean: "커피", level: "A1", type: "noun", gender: "der" },

    // A1 Verbs & Adjectives
    { german: "sein", korean: "이다", level: "A1", type: "other" },
    { german: "haben", korean: "가지다", level: "A1", type: "other" },
    { german: "machen", korean: "하다", level: "A1", type: "other" },
    { german: "gehen", korean: "가다", level: "A1", type: "other" },
    { german: "kommen", korean: "오다", level: "A1", type: "other" },
    { german: "sehen", korean: "보다", level: "A1", type: "other" },
    { german: "sprechen", korean: "말하다", level: "A1", type: "other" },
    { german: "essen", korean: "먹다", level: "A1", type: "other" },
    { german: "trinken", korean: "마시다", level: "A1", type: "other" },
    { german: "gut", korean: "좋은", level: "A1", type: "other" },
    { german: "groß", korean: "큰", level: "A1", type: "other" },
    { german: "klein", korean: "작은", level: "A1", type: "other" },
    { german: "neu", korean: "새로운", level: "A1", type: "other" },
    { german: "alt", korean: "오래된", level: "A1", type: "other" },
    { german: "schön", korean: "아름다운", level: "A1", type: "other" },

    // A2 Nouns
    { german: "Arbeit", korean: "일", level: "A2", type: "noun", gender: "die" },
    { german: "Reise", korean: "여행", level: "A2", type: "noun", gender: "die" },
    { german: "Geld", korean: "돈", level: "A2", type: "noun", gender: "das" },
    { german: "Frage", korean: "질문", level: "A2", type: "noun", gender: "die" },
    { german: "Antwort", korean: "대답", level: "A2", type: "noun", gender: "die" },
    { german: "Problem", korean: "문제", level: "A2", type: "noun", gender: "das" },
    { german: "Lösung", korean: "해결", level: "A2", type: "noun", gender: "die" },
    { german: "Weg", korean: "길", level: "A2", type: "noun", gender: "der" },
    { german: "Welt", korean: "세상", level: "A2", type: "noun", gender: "die" },
    { german: "Geschichte", korean: "이야기", level: "A2", type: "noun", gender: "die" },
    { german: "Erfahrung", korean: "경험", level: "A2", type: "noun", gender: "die" },
    { german: "Erfolg", korean: "성공", level: "A2", type: "noun", gender: "der" },
    { german: "Glück", korean: "행복", level: "A2", type: "noun", gender: "das" },
    { german: "Zukunft", korean: "미래", level: "A2", type: "noun", gender: "die" },
    { german: "Hoffnung", korean: "희망", level: "A2", type: "noun", gender: "die" },
    { german: "Gesundheit", korean: "건강", level: "A2", type: "noun", gender: "die" },
    { german: "Freiheit", korean: "자유", level: "A2", type: "noun", gender: "die" },
    { german: "Wahrheit", korean: "진실", level: "A2", type: "noun", gender: "die" },
    { german: "Geschenk", korean: "선물", level: "A2", type: "noun", gender: "das" },
    { german: "Gefühl", korean: "느낌", level: "A2", type: "noun", gender: "das" },

    // A2 Other
    { german: "denken", korean: "생각하다", level: "A2", type: "other" },
    { german: "wissen", korean: "알다", level: "A2", type: "other" },
    { german: "verstehen", korean: "이해하다", level: "A2", type: "other" },
    { german: "lernen", korean: "배우다", level: "A2", type: "other" },
    { german: "arbeiten", korean: "일하다", level: "A2", type: "other" },
    { german: "reisen", korean: "여행하다", level: "A2", type: "other" },
    { german: "kaufen", korean: "사다", level: "A2", type: "other" },
    { german: "suchen", korean: "찾다", level: "A2", type: "other" },
    { german: "finden", korean: "발견하다", level: "A2", type: "other" },
    { german: "wichtig", korean: "중요한", level: "A2", type: "other" },
    { german: "möglich", korean: "가능한", level: "A2", type: "other" },
    { german: "sicher", korean: "안전한", level: "A2", type: "other" },
    { german: "einfach", korean: "쉬운", level: "A2", type: "other" },
    { german: "schwierig", korean: "어려운", level: "A2", type: "other" },
    { german: "vielleicht", korean: "아마도", level: "A2", type: "other" },

    // B1 Nouns & Other
    { german: "Gesellschaft", korean: "사회", level: "B1", type: "noun", gender: "die" },
    { german: "Entscheidung", korean: "결정", level: "B1", type: "noun", gender: "die" },
    { german: "Verantwortung", korean: "책임", level: "B1", type: "noun", gender: "die" },
    { german: "Möglichkeit", korean: "가능성", level: "B1", type: "noun", gender: "die" },
    { german: "Unterschied", korean: "차이", level: "B1", type: "noun", gender: "der" },
    { german: "Beziehung", korean: "관계", level: "B1", type: "noun", gender: "die" },
    { german: "Eindruck", korean: "인상", level: "B1", type: "noun", gender: "der" },
    { german: "Kenntnis", korean: "지식", level: "B1", type: "noun", gender: "die" },
    { german: "Voraussetzung", korean: "전제조건", level: "B1", type: "noun", gender: "die" },
    { german: "Zusammenhang", korean: "맥락", level: "B1", type: "noun", gender: "der" },
    { german: "empfehlen", korean: "추천하다", level: "B1", type: "other" },
    { german: "vergleichen", korean: "비교하다", level: "B1", type: "other" },
    { german: "überzeugen", korean: "설득하다", level: "B1", type: "other" },
    { german: "vermeiden", korean: "피하다", level: "B1", type: "other" },
    { german: "entscheiden", korean: "결정하다", level: "B1", type: "other" }
];

let currentWords = [];
let currentIndex = 0;
let score = 0;
let total = 0;
let selectedGender = null;

const levelSelection = document.getElementById('level-selection');
const quizArea = document.getElementById('quiz-area');
const wordDisplay = document.getElementById('word-display');
const genderSelection = document.getElementById('gender-selection');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const scoreSpan = document.getElementById('score');
const totalSpan = document.getElementById('total');
const homeBtn = document.getElementById('home-btn');
const resetBtn = document.getElementById('reset-btn');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz(level) {
    currentWords = allWords.filter(w => w.level === level);
    shuffle(currentWords);
    currentIndex = 0;
    score = 0;
    total = 0;
    scoreSpan.textContent = "0";
    totalSpan.textContent = "0";
    levelSelection.style.display = "none";
    quizArea.style.display = "block";
    nextQuestion();
}

function nextQuestion() {
    if (currentIndex >= currentWords.length) {
        wordDisplay.textContent = "완료!";
        genderSelection.style.display = "none";
        answerInput.style.display = "none";
        submitBtn.style.display = "none";
        feedback.textContent = `시험이 끝났습니다. 최종 점수: ${score}/${total}`;
        return;
    }

    const word = currentWords[currentIndex];
    wordDisplay.textContent = word.german;
    answerInput.value = "";
    answerInput.style.display = "block";
    submitBtn.style.display = "block";
    feedback.textContent = "";
    selectedGender = null;
    
    document.querySelectorAll('.gender-btn').forEach(btn => btn.classList.remove('selected'));

    if (word.type === "noun") {
        genderSelection.style.display = "flex";
    } else {
        genderSelection.style.display = "none";
    }
    
    answerInput.focus();
}

function checkAnswer() {
    const word = currentWords[currentIndex];
    const userAnswer = answerInput.value.trim();
    const isCorrectMeaning = userAnswer === word.korean;
    let isCorrectGender = true;

    if (word.type === "noun") {
        isCorrectGender = selectedGender === word.gender;
    }

    total++;
    if (isCorrectMeaning && isCorrectGender) {
        score++;
        feedback.textContent = "정답입니다! 🎉";
        feedback.className = "feedback correct";
    } else {
        let errorMsg = `틀렸습니다. 정답: ${word.type === 'noun' ? word.gender + ' ' : ''}${word.german} - ${word.korean}`;
        feedback.textContent = errorMsg;
        feedback.className = "feedback incorrect";
    }

    scoreSpan.textContent = score;
    totalSpan.textContent = total;
    currentIndex++;
    
    setTimeout(nextQuestion, 2000);
}

// Event Listeners
document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => startQuiz(btn.dataset.level));
});

document.querySelectorAll('.gender-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        selectedGender = btn.dataset.gender;
        document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
    });
});

submitBtn.addEventListener('click', checkAnswer);
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
});

homeBtn.addEventListener('click', () => {
    quizArea.style.display = "none";
    levelSelection.style.display = "block";
});

resetBtn.addEventListener('click', () => {
    startQuiz(currentWords[0].level);
});
