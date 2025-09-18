// Hauptlogik für das T-Fox Techero-Quiz

// Konfiguration
const QUESTIONS_PER_QUIZ = 5; // Anzahl der Fragen pro Quiz

// DOM-Elemente
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const categoryButtons = document.querySelectorAll('.category-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const progressBar = document.getElementById('progress');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const correctAnswersElement = document.getElementById('correct-answers');
const totalAnsweredElement = document.getElementById('total-answered');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-btn');
const foxImage = document.getElementById('fox-image');
const foxSpeech = document.getElementById('fox-speech');

// Quiz-Zustand
let currentCategory = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let selectedCategory = '';

// T-Fox Reaktionen
const foxReactions = {
    greeting: "Willkommen bei meinem Quiz! Wähle eine Kategorie und lass uns starten!",
    correct: [
        "Super gemacht! Das ist richtig!",
        "Toll! Du kennst dich wirklich aus!",
        "Richtig! Du bist auf dem besten Weg, ein Techero zu werden!",
        "Ja, das stimmt! Weiter so!",
        "Perfekt! Das ist die richtige Antwort!"
    ],
    incorrect: [
        "Das ist leider nicht richtig. Aber keine Sorge, wir lernen alle dazu!",
        "Hmm, nicht ganz. Schau dir die richtige Antwort an!",
        "Fast! Aber die richtige Antwort ist eine andere.",
        "Das ist nicht korrekt, aber du lernst bestimmt etwas Neues!",
        "Nicht richtig, aber das ist okay! Jeder Fehler ist eine Chance zu lernen."
    ],
    resultGreat: "Wow! Du bist ein echter Techero! Fantastische Leistung!",
    resultGood: "Gut gemacht! Du bist auf dem besten Weg, ein Techero zu werden!",
    resultOkay: "Nicht schlecht! Mit etwas Übung wirst du noch besser!",
    resultPoor: "Das war ein guter Anfang! Versuche es noch einmal und du wirst besser werden!"
};

// Bilder für T-Fox (IDs der eingebetteten Bilder)
const foxImages = {
    normal: document.getElementById('t-fox-normal').src,
    happy: document.getElementById('t-fox-happy').src,
    thinking: document.getElementById('t-fox-thinking').src,
    sad: document.getElementById('t-fox-sad').src
};

// Funktion zum Ändern der T-Fox Reaktion
function changeFoxReaction(type, message = null) {
    switch(type) {
        case 'normal':
            foxImage.src = foxImages.normal;
            break;
        case 'happy':
            foxImage.src = foxImages.happy;
            break;
        case 'thinking':
            foxImage.src = foxImages.thinking;
            break;
        case 'sad':
            foxImage.src = foxImages.sad;
            break;
    }
    
    if (message) {
        foxSpeech.textContent = message;
    }
}

// Event-Listener für Kategorie-Buttons
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedCategory = button.getAttribute('data-category');
        startQuiz(selectedCategory);
    });
});

// Quiz starten
function startQuiz(category) {
    currentCategory = category;
    currentQuestions = [...quizQuestions[category]]; // Kopie der Fragen erstellen
    
    // Fragen mischen
    shuffleArray(currentQuestions);
    
    // Anzahl der Fragen pro Quiz begrenzen
    if (currentQuestions.length > QUESTIONS_PER_QUIZ) {
        currentQuestions = currentQuestions.slice(0, QUESTIONS_PER_QUIZ);
    }
    
    currentQuestionIndex = 0;
    correctAnswers = 0;
    
    // UI aktualisieren
    totalQuestionsElement.textContent = currentQuestions.length;
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    // Erste Frage anzeigen
    showQuestion();
    
    // T-Fox Reaktion ändern
    changeFoxReaction('thinking', `Los geht's mit der Kategorie "${getCategoryName(category)}"! Ich bin gespannt, wie gut du dich auskennst!`);
}

// Funktion zum Anzeigen einer Frage
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Fortschritt aktualisieren
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    progressBar.style.width = `${((currentQuestionIndex) / currentQuestions.length) * 100}%`;
    
    // Frage anzeigen
    questionText.textContent = question.question;
    
    // Antworten anzeigen
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(index));
        answersContainer.appendChild(button);
    });
    
    // T-Fox Reaktion ändern
    changeFoxReaction('thinking');
}

// Funktion zum Überprüfen der Antwort
function checkAnswer(selectedIndex) {
    const question = currentQuestions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');
    
    // Alle Buttons deaktivieren
    answerButtons.forEach(button => {
        button.disabled = true;
    });
    
    // Richtige und falsche Antwort markieren
    answerButtons[question.correctAnswer].classList.add('correct');
    
    // Wenn falsch, die ausgewählte Antwort markieren
    if (selectedIndex !== question.correctAnswer) {
        answerButtons[selectedIndex].classList.add('incorrect');
        // T-Fox traurige Reaktion
        changeFoxReaction('sad', foxReactions.incorrect[Math.floor(Math.random() * foxReactions.incorrect.length)]);
    } else {
        // Richtige Antwort
        correctAnswers++;
        // T-Fox fröhliche Reaktion
        changeFoxReaction('happy', foxReactions.correct[Math.floor(Math.random() * foxReactions.correct.length)]);
    }
    
    // Erklärung anzeigen
    setTimeout(() => {
        // Erklärung in Sprechblase anzeigen
        foxSpeech.textContent = question.explanation;
        
        // Nach kurzer Verzögerung zur nächsten Frage
        setTimeout(() => {
            currentQuestionIndex++;
            
            if (currentQuestionIndex < currentQuestions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }, 3000);
    }, 1500);
}

// Funktion zum Anzeigen des Ergebnisses
function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // Ergebnis anzeigen
    correctAnswersElement.textContent = correctAnswers;
    totalAnsweredElement.textContent = currentQuestions.length;
    
    // Prozentsatz berechnen
    const percentage = (correctAnswers / currentQuestions.length) * 100;
    
    // Abzeichen und Nachricht basierend auf Prozentsatz
    let resultBadgeImg = document.getElementById('result-badge-img');
    
    if (percentage >= 80) {
        resultBadgeImg.src = document.getElementById('gold-badge').src;
        resultMessage.textContent = foxReactions.resultGreat;
        changeFoxReaction('happy', foxReactions.resultGreat);
    } else if (percentage >= 60) {
        resultBadgeImg.src = document.getElementById('silver-badge').src;
        resultMessage.textContent = foxReactions.resultGood;
        changeFoxReaction('happy', foxReactions.resultGood);
    } else if (percentage >= 40) {
        resultBadgeImg.src = document.getElementById('bronze-badge').src;
        resultMessage.textContent = foxReactions.resultOkay;
        changeFoxReaction('normal', foxReactions.resultOkay);
    } else {
        resultBadgeImg.src = document.getElementById('try-again-badge').src;
        resultMessage.textContent = foxReactions.resultPoor;
        changeFoxReaction('thinking', foxReactions.resultPoor);
    }
}

// Event-Listener für Neustart-Button
restartButton.addEventListener('click', () => {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    changeFoxReaction('normal', foxReactions.greeting);
});

// Hilfsfunktion zum Mischen eines Arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Hilfsfunktion zum Abrufen des Kategorienamens
function getCategoryName(category) {
    switch(category) {
        case 'teamhelden':
            return 'Teamhelden';
        case 'kreativ':
            return 'Kreativ-Ecke';
        case 'weltentdecker':
            return 'Weltentdecker';
        case 'gemeinsam':
            return 'Gemeinsam stark';
        default:
            return category;
    }
}

// Funktion zum Teilen des Ergebnisses auf Social Media
function shareResult(platform) {
    const percentage = Math.round((correctAnswers / currentQuestions.length) * 100);
    const categoryName = getCategoryName(currentCategory);
    const url = window.location.href;
    const text = `Ich habe das T-Fox Techero-Quiz in der Kategorie "${categoryName}" absolviert und ${correctAnswers}/${currentQuestions.length} (${percentage}%) Fragen richtig beantwortet! Spiele auch mit: ${url}`;

    let shareUrl = '';

    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Initialisierung
window.addEventListener('DOMContentLoaded', () => {
    changeFoxReaction('normal', foxReactions.greeting);
});