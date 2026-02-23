const allWords = [
    // 독일어 (German)
    // A1 Nouns
    { word: "Apfel", korean: "사과", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Haus", korean: "집", level: "A1", type: "noun", gender: "das", lang: "german" },
    { word: "Auto", korean: "자동차", level: "A1", type: "noun", gender: "das", lang: "german" },
    { word: "Buch", korean: "책", level: "A1", type: "noun", gender: "das", lang: "german" },
    { word: "Wasser", korean: "물", level: "A1", type: "noun", gender: "das", lang: "german" },
    { word: "Brot", korean: "빵", level: "A1", type: "noun", gender: "das", lang: "german" },
    { word: "Schule", korean: "학교", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Freund", korean: "친구", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Zeit", korean: "시간", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Liebe", korean: "사랑", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Mann", korean: "남자", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Frau", korean: "여자", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Kind", korean: "아이", level: "A1", type: "noun", gender: "das", lang: "german" },
    { word: "Vater", korean: "아버지", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Mutter", korean: "어머니", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Stadt", korean: "도시", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Name", korean: "이름", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Tag", korean: "날", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Woche", korean: "주", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Monat", korean: "달", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Jahr", korean: "년", level: "A1", type: "noun", gender: "das", lang: "german" },
    { word: "Hand", korean: "손", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Auge", korean: "눈", level: "A1", type: "noun", gender: "das", lang: "german" },
    { word: "Mund", korean: "입", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Kopf", korean: "머리", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Essen", korean: "음식", level: "A1", type: "noun", gender: "das", lang: "german" },
    { word: "Tisch", korean: "책상", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Stuhl", korean: "의자", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Bett", korean: "침대", level: "A1", type: "noun", gender: "das", lang: "german" },
    { word: "Tür", korean: "문", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Fenster", korean: "창문", level: "A1", type: "noun", gender: "das", lang: "german" },
    { word: "Sonne", korean: "태양", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Mond", korean: "달", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Baum", korean: "나무", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Blume", korean: "꽃", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Hund", korean: "개", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Katze", korean: "고양이", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Vogel", korean: "새", level: "A1", type: "noun", gender: "der", lang: "german" },
    { word: "Milch", korean: "우유", level: "A1", type: "noun", gender: "die", lang: "german" },
    { word: "Kaffee", korean: "커피", level: "A1", type: "noun", gender: "der", lang: "german" },

    // A1 Verbs & Adjectives (German)
    { word: "sein", korean: "이다", level: "A1", type: "other", lang: "german" },
    { word: "haben", korean: "가지다", level: "A1", type: "other", lang: "german" },
    { word: "machen", korean: "하다", level: "A1", type: "other", lang: "german" },
    { word: "gehen", korean: "가다", level: "A1", type: "other", lang: "german" },
    { word: "kommen", korean: "오다", level: "A1", type: "other", lang: "german" },
    { word: "sehen", korean: "보다", level: "A1", type: "other", lang: "german" },
    { word: "sprechen", korean: "말하다", level: "A1", type: "other", lang: "german" },
    { word: "essen", korean: "먹다", level: "A1", type: "other", lang: "german" },
    { word: "trinken", korean: "마시다", level: "A1", type: "other", lang: "german" },
    { word: "gut", korean: "좋은", level: "A1", type: "other", lang: "german" },
    { word: "groß", korean: "큰", level: "A1", type: "other", lang: "german" },
    { word: "klein", korean: "작은", level: "A1", type: "other", lang: "german" },
    { word: "neu", korean: "새로운", level: "A1", type: "other", lang: "german" },
    { word: "alt", korean: "오래된", level: "A1", type: "other", lang: "german" },
    { word: "schön", korean: "아름다운", level: "A1", type: "other", lang: "german" },

    // 영어 (English)
    // A1 (English)
    { word: "apple", korean: "사과", level: "A1", type: "other", lang: "english" },
    { word: "house", korean: "집", level: "A1", type: "other", lang: "english" },
    { word: "car", korean: "자동차", level: "A1", type: "other", lang: "english" },
    { word: "book", korean: "책", level: "A1", type: "other", lang: "english" },
    { word: "water", korean: "물", level: "A1", type: "other", lang: "english" },
    { word: "bread", korean: "빵", level: "A1", type: "other", lang: "english" },
    { word: "school", korean: "학교", level: "A1", type: "other", lang: "english" },
    { word: "friend", korean: "친구", level: "A1", type: "other", lang: "english" },
    { word: "time", korean: "시간", level: "A1", type: "other", lang: "english" },
    { word: "love", korean: "사랑", level: "A1", type: "other", lang: "english" },
    { word: "man", korean: "남자", level: "A1", type: "other", lang: "english" },
    { word: "woman", korean: "여자", level: "A1", type: "other", lang: "english" },
    { word: "child", korean: "아이", level: "A1", type: "other", lang: "english" },
    { word: "father", korean: "아버지", level: "A1", type: "other", lang: "english" },
    { word: "mother", korean: "어머니", level: "A1", type: "other", lang: "english" },
    { word: "city", korean: "도시", level: "A1", type: "other", lang: "english" },
    { word: "name", korean: "이름", level: "A1", type: "other", lang: "english" },
    { word: "day", korean: "날", level: "A1", type: "other", lang: "english" },
    { word: "week", korean: "주", level: "A1", type: "other", lang: "english" },
    { word: "month", korean: "달", level: "A1", type: "other", lang: "english" },
    { word: "year", korean: "년", level: "A1", type: "other", lang: "english" },
    { word: "hand", korean: "손", level: "A1", type: "other", lang: "english" },
    { word: "eye", korean: "눈", level: "A1", type: "other", lang: "english" },
    { word: "mouth", korean: "입", level: "A1", type: "other", lang: "english" },
    { word: "head", korean: "머리", level: "A1", type: "other", lang: "english" },
    { word: "food", korean: "음식", level: "A1", type: "other", lang: "english" },
    { word: "desk", korean: "책상", level: "A1", type: "other", lang: "english" },
    { word: "chair", korean: "의자", level: "A1", type: "other", lang: "english" },
    { word: "bed", korean: "침대", level: "A1", type: "other", lang: "english" },
    { word: "door", korean: "문", level: "A1", type: "other", lang: "english" },
    
    // A2 (English)
    { word: "work", korean: "일", level: "A2", type: "other", lang: "english" },
    { word: "travel", korean: "여행", level: "A2", type: "other", lang: "english" },
    { word: "money", korean: "돈", level: "A2", type: "other", lang: "english" },
    { word: "question", korean: "질문", level: "A2", type: "other", lang: "english" },
    { word: "answer", korean: "대답", level: "A2", type: "other", lang: "english" },
    { word: "problem", korean: "문제", level: "A2", type: "other", lang: "english" },
    { word: "solution", korean: "해결", level: "A2", type: "other", lang: "english" },
    { word: "way", korean: "길", level: "A2", type: "other", lang: "english" },
    { word: "world", korean: "세상", level: "A2", type: "other", lang: "english" },
    { word: "story", korean: "이야기", level: "A2", type: "other", lang: "english" },

    // B1 (English)
    { word: "society", korean: "사회", level: "B1", type: "other", lang: "english" },
    { word: "decision", korean: "결정", level: "B1", type: "other", lang: "english" },
    { word: "responsibility", korean: "책임", level: "B1", type: "other", lang: "english" },
    { word: "possibility", korean: "가능성", level: "B1", type: "other", lang: "english" },
    { word: "difference", korean: "차이", level: "B1", type: "other", lang: "english" }
];

let currentWords = [];
let currentIndex = 0;
let score = 0;
let total = 0;
let selectedGender = null;
let currentLang = "german";

const languageSelection = document.getElementById('language-selection');
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
const backToLangBtn = document.getElementById('back-to-lang');
const mainTitle = document.getElementById('main-title');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function selectLanguage(lang) {
    currentLang = lang;
    languageSelection.style.display = "none";
    levelSelection.style.display = "block";
    mainTitle.textContent = lang === "german" ? "독일어 단어 시험" : "영어 단어 시험";
}

function startQuiz(level) {
    currentWords = allWords.filter(w => w.lang === currentLang && w.level === level);
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

    const wordObj = currentWords[currentIndex];
    wordDisplay.textContent = wordObj.word;
    answerInput.value = "";
    answerInput.style.display = "block";
    submitBtn.style.display = "block";
    feedback.textContent = "";
    selectedGender = null;
    
    document.querySelectorAll('.gender-btn').forEach(btn => btn.classList.remove('selected'));

    if (currentLang === "german" && wordObj.type === "noun") {
        genderSelection.style.display = "flex";
    } else {
        genderSelection.style.display = "none";
    }
    
    answerInput.focus();
}

function checkAnswer() {
    const wordObj = currentWords[currentIndex];
    const userAnswer = answerInput.value.trim();
    const isCorrectMeaning = userAnswer === wordObj.korean;
    let isCorrectGender = true;

    if (currentLang === "german" && wordObj.type === "noun") {
        isCorrectGender = selectedGender === wordObj.gender;
    }

    total++;
    if (isCorrectMeaning && isCorrectGender) {
        score++;
        feedback.textContent = "정답입니다! 🎉";
        feedback.className = "feedback correct";
    } else {
        let answerStr = wordObj.korean;
        if (currentLang === "german" && wordObj.type === "noun") {
            answerStr = `${wordObj.gender} ${wordObj.word} - ${wordObj.korean}`;
        } else {
            answerStr = `${wordObj.word} - ${wordObj.korean}`;
        }
        feedback.textContent = `틀렸습니다. 정답: ${answerStr}`;
        feedback.className = "feedback incorrect";
    }

    scoreSpan.textContent = score;
    totalSpan.textContent = total;
    currentIndex++;
    
    setTimeout(nextQuestion, 2000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectLanguage(btn.dataset.lang);
        });
    });

    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            startQuiz(btn.dataset.level);
        });
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

    backToLangBtn.addEventListener('click', () => {
        levelSelection.style.display = "none";
        languageSelection.style.display = "block";
        mainTitle.textContent = "외국어 단어 시험";
    });

    resetBtn.addEventListener('click', () => {
        if (currentWords.length > 0) {
            startQuiz(currentWords[0].level);
        }
    });
});
