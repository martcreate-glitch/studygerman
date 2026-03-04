const beginnerWords = [
  // German A1
  { lang: "german", word: "der Apfel", meaning: "사과", type: "noun" },
  { lang: "german", word: "das Haus", meaning: "집", type: "noun" },
  { lang: "german", word: "die Schule", meaning: "학교", type: "noun" },
  { lang: "german", word: "das Buch", meaning: "책", type: "noun" },
  { lang: "german", word: "der Freund", meaning: "친구(남)", type: "noun" },
  { lang: "german", word: "die Freundin", meaning: "친구(여)", type: "noun" },
  { lang: "german", word: "das Wasser", meaning: "물", type: "noun" },
  { lang: "german", word: "das Brot", meaning: "빵", type: "noun" },
  { lang: "german", word: "die Familie", meaning: "가족", type: "noun" },
  { lang: "german", word: "die Zeit", meaning: "시간", type: "noun" },
  { lang: "german", word: "die Stadt", meaning: "도시", type: "noun" },
  { lang: "german", word: "der Tag", meaning: "하루, 날", type: "noun" },
  { lang: "german", word: "das Jahr", meaning: "해, 년", type: "noun" },
  { lang: "german", word: "der Tisch", meaning: "책상", type: "noun" },
  { lang: "german", word: "die Tür", meaning: "문", type: "noun" },
  { lang: "german", word: "gehen", meaning: "가다", type: "verb" },
  { lang: "german", word: "kommen", meaning: "오다", type: "verb" },
  { lang: "german", word: "lernen", meaning: "배우다", type: "verb" },
  { lang: "german", word: "sprechen", meaning: "말하다", type: "verb" },
  { lang: "german", word: "essen", meaning: "먹다", type: "verb" },
  { lang: "german", word: "trinken", meaning: "마시다", type: "verb" },
  { lang: "german", word: "arbeiten", meaning: "일하다", type: "verb" },
  { lang: "german", word: "wohnen", meaning: "살다", type: "verb" },
  { lang: "german", word: "kaufen", meaning: "사다", type: "verb" },
  { lang: "german", word: "sehen", meaning: "보다", type: "verb" },
  { lang: "german", word: "gut", meaning: "좋은", type: "adjective" },
  { lang: "german", word: "klein", meaning: "작은", type: "adjective" },
  { lang: "german", word: "gross", meaning: "큰", type: "adjective" },
  { lang: "german", word: "neu", meaning: "새로운", type: "adjective" },
  { lang: "german", word: "alt", meaning: "늙은, 오래된", type: "adjective" },
  { lang: "german", word: "Wie geht's?", meaning: "어떻게 지내?", type: "expression" },
  { lang: "german", word: "Danke schön", meaning: "고마워요", type: "expression" },
  { lang: "german", word: "Guten Morgen", meaning: "좋은 아침입니다", type: "expression" },
  { lang: "german", word: "der Bahnhof", meaning: "기차역", type: "noun" },
  { lang: "german", word: "der Markt", meaning: "시장", type: "noun" },
  { lang: "german", word: "der Arzt", meaning: "의사", type: "noun" },
  { lang: "german", word: "der Zug", meaning: "기차", type: "noun" },
  { lang: "german", word: "das Fenster", meaning: "창문", type: "noun" },
  { lang: "german", word: "fragen", meaning: "묻다", type: "verb" },
  { lang: "german", word: "antworten", meaning: "대답하다", type: "verb" },
  { lang: "german", word: "brauchen", meaning: "필요하다", type: "verb" },
  { lang: "german", word: "öffnen", meaning: "열다", type: "verb" },
  { lang: "german", word: "schließen", meaning: "닫다", type: "verb" },
  { lang: "german", word: "langsam", meaning: "느린", type: "adjective" },
  { lang: "german", word: "schnell", meaning: "빠른", type: "adjective" },
  { lang: "german", word: "teuer", meaning: "비싼", type: "adjective" },
  { lang: "german", word: "Entschuldigung!", meaning: "실례합니다!", type: "expression" },
  { lang: "german", word: "Ich verstehe nicht.", meaning: "이해하지 못했어요.", type: "expression" },
  { lang: "german", word: "Können Sie das wiederholen?", meaning: "다시 말씀해 주실 수 있나요?", type: "expression" },
  { lang: "german", word: "Bis später!", meaning: "이따 봐요!", type: "expression" },
  { lang: "german", word: "der Lehrer", meaning: "선생님(남)", type: "noun" },
  { lang: "german", word: "die Lehrerin", meaning: "선생님(여)", type: "noun" },
  { lang: "german", word: "der Student", meaning: "학생(남)", type: "noun" },
  { lang: "german", word: "die Universität", meaning: "대학교", type: "noun" },
  { lang: "german", word: "das Auto", meaning: "자동차", type: "noun" },
  { lang: "german", word: "das Fahrrad", meaning: "자전거", type: "noun" },
  { lang: "german", word: "die Straße", meaning: "거리", type: "noun" },
  { lang: "german", word: "der Park", meaning: "공원", type: "noun" },
  { lang: "german", word: "das Handy", meaning: "휴대폰", type: "noun" },
  { lang: "german", word: "der Computer", meaning: "컴퓨터", type: "noun" },
  { lang: "german", word: "das Telefon", meaning: "전화기", type: "noun" },
  { lang: "german", word: "der Kaffee", meaning: "커피", type: "noun" },
  { lang: "german", word: "der Tee", meaning: "차", type: "noun" },
  { lang: "german", word: "das Frühstück", meaning: "아침식사", type: "noun" },
  { lang: "german", word: "das Abendessen", meaning: "저녁식사", type: "noun" },
  { lang: "german", word: "der Supermarkt", meaning: "슈퍼마켓", type: "noun" },
  { lang: "german", word: "die Apotheke", meaning: "약국", type: "noun" },
  { lang: "german", word: "das Krankenhaus", meaning: "병원", type: "noun" },
  { lang: "german", word: "der Flughafen", meaning: "공항", type: "noun" },
  { lang: "german", word: "das Hotel", meaning: "호텔", type: "noun" },
  { lang: "german", word: "fahren", meaning: "타고 가다", type: "verb" },
  { lang: "german", word: "laufen", meaning: "달리다", type: "verb" },
  { lang: "german", word: "schlafen", meaning: "자다", type: "verb" },
  { lang: "german", word: "schreiben", meaning: "쓰다", type: "verb" },
  { lang: "german", word: "lesen", meaning: "읽다", type: "verb" },
  { lang: "german", word: "hören", meaning: "듣다", type: "verb" },
  { lang: "german", word: "spielen", meaning: "놀다", type: "verb" },
  { lang: "german", word: "besuchen", meaning: "방문하다", type: "verb" },
  { lang: "german", word: "bezahlen", meaning: "지불하다", type: "verb" },
  { lang: "german", word: "suchen", meaning: "찾다", type: "verb" },
  { lang: "german", word: "finden", meaning: "발견하다", type: "verb" },
  { lang: "german", word: "warten", meaning: "기다리다", type: "verb" },
  { lang: "german", word: "erklären", meaning: "설명하다", type: "verb" },
  { lang: "german", word: "erinnern", meaning: "기억하다", type: "verb" },
  { lang: "german", word: "entscheiden", meaning: "결정하다", type: "verb" },
  { lang: "german", word: "warm", meaning: "따뜻한", type: "adjective" },
  { lang: "german", word: "kalt", meaning: "차가운", type: "adjective" },
  { lang: "german", word: "schön", meaning: "아름다운", type: "adjective" },
  { lang: "german", word: "wichtig", meaning: "중요한", type: "adjective" },
  { lang: "german", word: "einfach", meaning: "쉬운", type: "adjective" },
  { lang: "german", word: "schwierig", meaning: "어려운", type: "adjective" },
  { lang: "german", word: "früh", meaning: "이른", type: "adjective" },
  { lang: "german", word: "spät", meaning: "늦은", type: "adjective" },
  { lang: "german", word: "Guten Abend!", meaning: "좋은 저녁입니다!", type: "expression" },
  { lang: "german", word: "Gute Nacht!", meaning: "안녕히 주무세요!", type: "expression" },
  { lang: "german", word: "Viel Erfolg!", meaning: "행운을 빌어요!", type: "expression" },
  { lang: "german", word: "Keine Ahnung.", meaning: "잘 모르겠어요.", type: "expression" },
  { lang: "german", word: "Ich habe eine Frage.", meaning: "질문이 있어요.", type: "expression" },
  { lang: "german", word: "Wo ist die Toilette?", meaning: "화장실이 어디예요?", type: "expression" },
  { lang: "german", word: "Ich bin müde.", meaning: "저는 피곤해요.", type: "expression" },

  // English A1
  { lang: "english", word: "apple", meaning: "사과", type: "noun" },
  { lang: "english", word: "house", meaning: "집", type: "noun" },
  { lang: "english", word: "school", meaning: "학교", type: "noun" },
  { lang: "english", word: "book", meaning: "책", type: "noun" },
  { lang: "english", word: "friend", meaning: "친구", type: "noun" },
  { lang: "english", word: "family", meaning: "가족", type: "noun" },
  { lang: "english", word: "water", meaning: "물", type: "noun" },
  { lang: "english", word: "bread", meaning: "빵", type: "noun" },
  { lang: "english", word: "city", meaning: "도시", type: "noun" },
  { lang: "english", word: "time", meaning: "시간", type: "noun" },
  { lang: "english", word: "day", meaning: "하루, 날", type: "noun" },
  { lang: "english", word: "year", meaning: "해, 년", type: "noun" },
  { lang: "english", word: "table", meaning: "책상", type: "noun" },
  { lang: "english", word: "door", meaning: "문", type: "noun" },
  { lang: "english", word: "work", meaning: "일", type: "noun" },
  { lang: "english", word: "go", meaning: "가다", type: "verb" },
  { lang: "english", word: "come", meaning: "오다", type: "verb" },
  { lang: "english", word: "learn", meaning: "배우다", type: "verb" },
  { lang: "english", word: "speak", meaning: "말하다", type: "verb" },
  { lang: "english", word: "eat", meaning: "먹다", type: "verb" },
  { lang: "english", word: "drink", meaning: "마시다", type: "verb" },
  { lang: "english", word: "study", meaning: "공부하다", type: "verb" },
  { lang: "english", word: "live", meaning: "살다", type: "verb" },
  { lang: "english", word: "buy", meaning: "사다", type: "verb" },
  { lang: "english", word: "see", meaning: "보다", type: "verb" },
  { lang: "english", word: "good", meaning: "좋은", type: "adjective" },
  { lang: "english", word: "small", meaning: "작은", type: "adjective" },
  { lang: "english", word: "big", meaning: "큰", type: "adjective" },
  { lang: "english", word: "new", meaning: "새로운", type: "adjective" },
  { lang: "english", word: "old", meaning: "오래된", type: "adjective" },
  { lang: "english", word: "How are you?", meaning: "어떻게 지내?", type: "expression" },
  { lang: "english", word: "Thank you", meaning: "고마워요", type: "expression" },
  { lang: "english", word: "Good morning", meaning: "좋은 아침입니다", type: "expression" },
  { lang: "english", word: "station", meaning: "기차역", type: "noun" },
  { lang: "english", word: "market", meaning: "시장", type: "noun" },
  { lang: "english", word: "doctor", meaning: "의사", type: "noun" },
  { lang: "english", word: "train", meaning: "기차", type: "noun" },
  { lang: "english", word: "window", meaning: "창문", type: "noun" },
  { lang: "english", word: "ask", meaning: "묻다", type: "verb" },
  { lang: "english", word: "answer", meaning: "대답하다", type: "verb" },
  { lang: "english", word: "need", meaning: "필요하다", type: "verb" },
  { lang: "english", word: "open", meaning: "열다", type: "verb" },
  { lang: "english", word: "close", meaning: "닫다", type: "verb" },
  { lang: "english", word: "slow", meaning: "느린", type: "adjective" },
  { lang: "english", word: "fast", meaning: "빠른", type: "adjective" },
  { lang: "english", word: "expensive", meaning: "비싼", type: "adjective" },
  { lang: "english", word: "Excuse me!", meaning: "실례합니다!", type: "expression" },
  { lang: "english", word: "I don't understand.", meaning: "이해하지 못했어요.", type: "expression" },
  { lang: "english", word: "Could you repeat that?", meaning: "다시 말씀해 주실 수 있나요?", type: "expression" },
  { lang: "english", word: "See you later!", meaning: "이따 봐요!", type: "expression" },
  { lang: "english", word: "teacher", meaning: "선생님", type: "noun" },
  { lang: "english", word: "student", meaning: "학생", type: "noun" },
  { lang: "english", word: "university", meaning: "대학교", type: "noun" },
  { lang: "english", word: "car", meaning: "자동차", type: "noun" },
  { lang: "english", word: "bicycle", meaning: "자전거", type: "noun" },
  { lang: "english", word: "street", meaning: "거리", type: "noun" },
  { lang: "english", word: "park", meaning: "공원", type: "noun" },
  { lang: "english", word: "phone", meaning: "휴대폰", type: "noun" },
  { lang: "english", word: "computer", meaning: "컴퓨터", type: "noun" },
  { lang: "english", word: "telephone", meaning: "전화기", type: "noun" },
  { lang: "english", word: "coffee", meaning: "커피", type: "noun" },
  { lang: "english", word: "tea", meaning: "차", type: "noun" },
  { lang: "english", word: "breakfast", meaning: "아침식사", type: "noun" },
  { lang: "english", word: "dinner", meaning: "저녁식사", type: "noun" },
  { lang: "english", word: "supermarket", meaning: "슈퍼마켓", type: "noun" },
  { lang: "english", word: "pharmacy", meaning: "약국", type: "noun" },
  { lang: "english", word: "hospital", meaning: "병원", type: "noun" },
  { lang: "english", word: "airport", meaning: "공항", type: "noun" },
  { lang: "english", word: "hotel", meaning: "호텔", type: "noun" },
  { lang: "english", word: "question", meaning: "질문", type: "noun" },
  { lang: "english", word: "drive", meaning: "운전하다", type: "verb" },
  { lang: "english", word: "run", meaning: "달리다", type: "verb" },
  { lang: "english", word: "sleep", meaning: "자다", type: "verb" },
  { lang: "english", word: "write", meaning: "쓰다", type: "verb" },
  { lang: "english", word: "read", meaning: "읽다", type: "verb" },
  { lang: "english", word: "listen", meaning: "듣다", type: "verb" },
  { lang: "english", word: "play", meaning: "놀다", type: "verb" },
  { lang: "english", word: "visit", meaning: "방문하다", type: "verb" },
  { lang: "english", word: "pay", meaning: "지불하다", type: "verb" },
  { lang: "english", word: "search", meaning: "찾다", type: "verb" },
  { lang: "english", word: "find", meaning: "발견하다", type: "verb" },
  { lang: "english", word: "wait", meaning: "기다리다", type: "verb" },
  { lang: "english", word: "explain", meaning: "설명하다", type: "verb" },
  { lang: "english", word: "remember", meaning: "기억하다", type: "verb" },
  { lang: "english", word: "decide", meaning: "결정하다", type: "verb" },
  { lang: "english", word: "warm", meaning: "따뜻한", type: "adjective" },
  { lang: "english", word: "cold", meaning: "차가운", type: "adjective" },
  { lang: "english", word: "beautiful", meaning: "아름다운", type: "adjective" },
  { lang: "english", word: "important", meaning: "중요한", type: "adjective" },
  { lang: "english", word: "easy", meaning: "쉬운", type: "adjective" },
  { lang: "english", word: "difficult", meaning: "어려운", type: "adjective" },
  { lang: "english", word: "early", meaning: "이른", type: "adjective" },
  { lang: "english", word: "late", meaning: "늦은", type: "adjective" },
  { lang: "english", word: "Good evening!", meaning: "좋은 저녁입니다!", type: "expression" },
  { lang: "english", word: "Good night!", meaning: "안녕히 주무세요!", type: "expression" },
  { lang: "english", word: "Good luck!", meaning: "행운을 빌어요!", type: "expression" },
  { lang: "english", word: "I have no idea.", meaning: "잘 모르겠어요.", type: "expression" },
  { lang: "english", word: "I have a question.", meaning: "질문이 있어요.", type: "expression" },
  { lang: "english", word: "Where is the restroom?", meaning: "화장실이 어디예요?", type: "expression" },
  { lang: "english", word: "I am tired.", meaning: "저는 피곤해요.", type: "expression" }
];

const countTextEl = document.getElementById("count-text");
const currentLanguageEl = document.getElementById("current-language");
const languageChipsEl = document.getElementById("language-chips");
const typeChipsEl = document.getElementById("type-chips");
const emptyStateEl = document.getElementById("empty-state");

const flashcardEl = document.getElementById("flashcard");
const cardTypeEl = document.getElementById("card-type");
const cardWordEl = document.getElementById("card-word");
const cardMeaningEl = document.getElementById("card-meaning");
const prevBtnEl = document.getElementById("prev-btn");
const randomBtnEl = document.getElementById("random-btn");
const revealBtnEl = document.getElementById("reveal-btn");

const languageLabel = { german: "독일어", english: "영어" };
const typeLabel = { noun: "명사", verb: "동사", adjective: "형용사", expression: "표현" };

let selectedLang = "english";
let selectedType = "all";
let filteredWords = [];
let currentIndex = 0;
let currentProgress = 1;
let isMeaningVisible = false;
let touchStartX = 0;
let touchStartY = 0;
let recentSwipe = false;

function getFilteredWords() {
  return beginnerWords.filter((item) => {
    if (item.lang !== selectedLang) return false;
    if (selectedType !== "all" && item.type !== selectedType) return false;
    return true;
  });
}

function updateSummary() {
  currentLanguageEl.textContent = `${languageLabel[selectedLang]} A1 단어장`;
  if (filteredWords.length === 0) {
    countTextEl.textContent = "총 0개";
    return;
  }
  countTextEl.textContent = `${currentProgress} / ${filteredWords.length}`;
}

function updateCard() {
  updateSummary();

  if (filteredWords.length === 0) {
    flashcardEl.classList.add("is-empty");
    emptyStateEl.hidden = false;
    cardTypeEl.textContent = "-";
    cardWordEl.textContent = "단어 없음";
    cardMeaningEl.hidden = true;
    revealBtnEl.disabled = true;
    prevBtnEl.disabled = true;
    randomBtnEl.disabled = true;
    return;
  }

  emptyStateEl.hidden = true;
  flashcardEl.classList.remove("is-empty");
  revealBtnEl.disabled = false;
  prevBtnEl.disabled = false;
  randomBtnEl.disabled = filteredWords.length === 0;

  const currentWord = filteredWords[currentIndex];
  cardTypeEl.textContent = typeLabel[currentWord.type];
  cardWordEl.textContent = currentWord.word;
  cardMeaningEl.textContent = currentWord.meaning;
  cardMeaningEl.hidden = !isMeaningVisible;
  revealBtnEl.textContent = isMeaningVisible ? "다음" : "뜻 보기";
}

function getRandomIndex(length) {
  if (length <= 0) return 0;
  return Math.floor(Math.random() * length);
}

function renderCards(resetIndex = false, randomStart = false) {
  filteredWords = getFilteredWords();

  if (resetIndex) {
    currentIndex = randomStart ? getRandomIndex(filteredWords.length) : 0;
    currentProgress = filteredWords.length > 0 ? 1 : 0;
    isMeaningVisible = false;
  } else if (currentIndex >= filteredWords.length) {
    currentIndex = Math.max(filteredWords.length - 1, 0);
    currentProgress = filteredWords.length > 0 ? Math.min(currentProgress, filteredWords.length) : 0;
    isMeaningVisible = false;
  }

  updateCard();
}

function showNextCard() {
  if (filteredWords.length === 0) return;
  currentIndex = (currentIndex + 1) % filteredWords.length;
  currentProgress = (currentProgress % filteredWords.length) + 1;
  isMeaningVisible = false;
  updateCard();
}

function showPrevCard() {
  if (filteredWords.length === 0) return;
  currentIndex = (currentIndex - 1 + filteredWords.length) % filteredWords.length;
  currentProgress = ((currentProgress - 2 + filteredWords.length) % filteredWords.length) + 1;
  isMeaningVisible = false;
  updateCard();
}

function showRandomCard() {
  if (filteredWords.length === 0) return;
  const prevIndex = currentIndex;

  if (filteredWords.length > 1) {
    let nextIndex = getRandomIndex(filteredWords.length);
    while (nextIndex === currentIndex) {
      nextIndex = getRandomIndex(filteredWords.length);
    }
    currentIndex = nextIndex;
  }

  currentProgress = currentIndex + 1;
  isMeaningVisible = false;
  updateCard();

  flashcardEl.classList.remove("card-shuffle");
  void flashcardEl.offsetWidth; // force reflow to restart animation
  flashcardEl.classList.add("card-shuffle");
}

function showMeaningOrNext() {
  if (filteredWords.length === 0) return;
  if (!isMeaningVisible) {
    isMeaningVisible = true;
    updateCard();
    return;
  }
  showNextCard();
}

function activateChip(target, selector) {
  document.querySelectorAll(selector).forEach((chip) => chip.classList.remove("active"));
  target.classList.add("active");
}

languageChipsEl.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-lang]");
  if (!button) return;
  selectedLang = button.dataset.lang;
  activateChip(button, "#language-chips .chip");
  renderCards(true);
});

typeChipsEl.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-type]");
  if (!button) return;
  selectedType = button.dataset.type;
  activateChip(button, "#type-chips .chip");
  renderCards(true);
});
prevBtnEl.addEventListener("click", showPrevCard);
randomBtnEl.addEventListener("click", showRandomCard);
revealBtnEl.addEventListener("click", showMeaningOrNext);
flashcardEl.addEventListener("click", handleCardTap);

flashcardEl.addEventListener(
  "touchstart",
  (event) => {
    if (!event.touches[0]) return;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  },
  { passive: true }
);

flashcardEl.addEventListener(
  "touchend",
  (event) => {
    if (!event.changedTouches[0]) return;
    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;
    const diffX = endX - touchStartX;
    const diffY = endY - touchStartY;

    if (Math.abs(diffX) < 50 || Math.abs(diffX) < Math.abs(diffY)) return;
    recentSwipe = true;
    if (diffX < 0) showNextCard();
    if (diffX > 0) showPrevCard();
  },
  { passive: true }
);

renderCards(true, true);
function handleCardTap() {
  if (recentSwipe) {
    recentSwipe = false;
    return;
  }
  showMeaningOrNext();
}
