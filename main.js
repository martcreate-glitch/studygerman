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

    // A2 (German)
    { word: "Arbeit", korean: "일", level: "A2", type: "noun", gender: "die", lang: "german" },
    { word: "Reise", korean: "여행", level: "A2", type: "noun", gender: "die", lang: "german" },
    { word: "Geld", korean: "돈", level: "A2", type: "noun", gender: "das", lang: "german" },
    { word: "Frage", korean: "질문", level: "A2", type: "noun", gender: "die", lang: "german" },
    { word: "Antwort", korean: "대답", level: "A2", type: "noun", gender: "die", lang: "german" },
    { word: "Problem", korean: "문제", level: "A2", type: "noun", gender: "das", lang: "german" },
    { word: "Lösung", korean: "해결", level: "A2", type: "noun", gender: "die", lang: "german" },
    { word: "Weg", korean: "길", level: "A2", type: "noun", gender: "der", lang: "german" },
    { word: "Welt", korean: "세상", level: "A2", type: "noun", gender: "die", lang: "german" },
    { word: "Geschichte", korean: "이야기", level: "A2", type: "noun", gender: "die", lang: "german" },

    // B1 (German)
    { word: "Gesellschaft", korean: "사회", level: "B1", type: "noun", gender: "die", lang: "german" },
    { word: "Entscheidung", korean: "결정", level: "B1", type: "noun", gender: "die", lang: "german" },
    { word: "Verantwortung", korean: "책임", level: "B1", type: "noun", gender: "die", lang: "german" },
    { word: "Möglichkeit", korean: "가능성", level: "B1", type: "noun", gender: "die", lang: "german" },
    { word: "Unterschied", korean: "차이", level: "B1", type: "noun", gender: "der", lang: "german" },
    { word: "Erfahrung", korean: "경험", level: "B1", type: "noun", gender: "die", lang: "german" },
    { word: "Zukunft", korean: "미래", level: "B1", type: "noun", gender: "die", lang: "german" },
    { word: "Wissen", korean: "지식", level: "B1", type: "noun", gender: "das", lang: "german" },
    { word: "Meinung", korean: "의견", level: "B1", type: "noun", gender: "die", lang: "german" },
    { word: "Gefühl", korean: "느낌", level: "B1", type: "noun", gender: "das", lang: "german" },

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
let currentLevel = "A1";

const a1GrammarByLanguage = {
    german: [
        {
            title: "be 동사에 해당하는 sein",
            explanation: "ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind 형태를 먼저 익히세요."
        },
        {
            title: "동사 현재형 변화",
            explanation: "규칙 동사는 어간 + -e, -st, -t, -en, -t, -en으로 활용합니다. 예: machen -> ich mache."
        },
        {
            title: "정관사 der / die / das",
            explanation: "독일어 명사는 성이 있어 관사를 함께 외워야 합니다. 예: der Mann, die Frau, das Kind."
        },
        {
            title: "의문문 만들기",
            explanation: "의문사는 문장 맨 앞, 동사는 2번째 위치입니다. Ja/Nein 의문문은 동사가 맨 앞에 옵니다."
        },
        {
            title: "부정하기 (nicht / kein)",
            explanation: "nicht는 동사/형용사/문장 부정, kein은 명사 앞에서 부정 관사로 사용합니다."
        }
    ],
    english: [
        {
            title: "be 동사 현재형",
            explanation: "I am, You are, He/She/It is, We/They are 형태를 문장으로 반복 연습하세요."
        },
        {
            title: "일반동사 현재형",
            explanation: "3인칭 단수에서 -s/-es를 붙입니다. 예: He works, She watches."
        },
        {
            title: "기초 시제: 현재진행형",
            explanation: "be + 동사-ing 형태입니다. 예: I am studying, They are playing."
        },
        {
            title: "의문문과 부정문",
            explanation: "일반동사는 do/does를 사용합니다. 예: Do you like coffee? She does not like milk."
        },
        {
            title: "기초 전치사 in / on / at",
            explanation: "장소와 시간에서 자주 쓰이는 A1 전치사입니다. 예: at 7, on Monday, in Seoul."
        }
    ]
};

const languageSelection = document.getElementById('language-selection');
const modeSelection = document.getElementById('mode-selection');
const levelSelection = document.getElementById('level-selection');
const grammarArea = document.getElementById('grammar-area');
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
const backToModeBtn = document.getElementById('back-to-mode');
const modeBackToLangBtn = document.getElementById('mode-back-to-lang');
const grammarModeBtn = document.getElementById('grammar-mode-btn');
const vocabModeBtn = document.getElementById('vocab-mode-btn');
const grammarList = document.getElementById('grammar-list');
const grammarTitle = document.getElementById('grammar-title');
const grammarHomeBtn = document.getElementById('grammar-home-btn');
const grammarLangBtn = document.getElementById('grammar-lang-btn');
const mainTitle = document.getElementById('main-title');

function hideAllSections() {
    languageSelection.style.display = "none";
    modeSelection.style.display = "none";
    levelSelection.style.display = "none";
    grammarArea.style.display = "none";
    quizArea.style.display = "none";
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function selectLanguage(lang) {
    currentLang = lang;
    hideAllSections();
    modeSelection.style.display = "block";
    mainTitle.textContent = lang === "german" ? "독일어 학습" : "영어 학습";
}

function renderA1Grammar() {
    const lessons = a1GrammarByLanguage[currentLang] || [];
    grammarList.innerHTML = "";
    lessons.forEach((lesson, idx) => {
        const card = document.createElement("div");
        card.className = "grammar-card";
        card.innerHTML = `
            <h3>${idx + 1}. ${lesson.title}</h3>
            <p>${lesson.explanation}</p>
        `;
        grammarList.appendChild(card);
    });
}

function openGrammarStudy() {
    hideAllSections();
    grammarArea.style.display = "block";
    grammarTitle.textContent = currentLang === "german" ? "독일어 A1 문법" : "영어 A1 문법";
    mainTitle.textContent = currentLang === "german" ? "독일어 문법 공부" : "영어 문법 공부";
    renderA1Grammar();
}

function openLevelSelection() {
    hideAllSections();
    levelSelection.style.display = "block";
    mainTitle.textContent = currentLang === "german" ? "독일어 단어 시험" : "영어 단어 시험";
}

function startQuiz(level) {
    currentLevel = level;
    currentWords = allWords.filter(w => w.lang === currentLang && w.level === level);
    shuffle(currentWords);
    currentIndex = 0;
    score = 0;
    total = 0;
    scoreSpan.textContent = "0";
    totalSpan.textContent = "0";
    hideAllSections();
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
        openLevelSelection();
    });

    modeBackToLangBtn.addEventListener('click', () => {
        hideAllSections();
        languageSelection.style.display = "block";
        mainTitle.textContent = "외국어 학습";
    });

    grammarModeBtn.addEventListener('click', () => {
        openGrammarStudy();
    });

    vocabModeBtn.addEventListener('click', () => {
        openLevelSelection();
    });

    backToModeBtn.addEventListener('click', () => {
        hideAllSections();
        modeSelection.style.display = "block";
        mainTitle.textContent = currentLang === "german" ? "독일어 학습" : "영어 학습";
    });

    grammarHomeBtn.addEventListener('click', () => {
        hideAllSections();
        modeSelection.style.display = "block";
        mainTitle.textContent = currentLang === "german" ? "독일어 학습" : "영어 학습";
    });

    grammarLangBtn.addEventListener('click', () => {
        hideAllSections();
        languageSelection.style.display = "block";
        mainTitle.textContent = "외국어 학습";
    });

    resetBtn.addEventListener('click', () => {
        if (currentWords.length > 0) {
            startQuiz(currentLevel);
        }
    });
});
