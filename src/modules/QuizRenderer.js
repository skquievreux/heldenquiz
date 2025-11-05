/**
 * QuizRenderer Module
 * Rendert und aktualisiert die Quiz-Benutzeroberfläche
 */

export class QuizRenderer {
  constructor() {
    this.elements = {};
    this.screens = {};
  }

  /**
   * Initialisiert den Renderer mit DOM-Elementen
   */
  init() {
    // Screens
    this.screens = {
      start: document.getElementById('start-screen'),
      quiz: document.getElementById('quiz-screen'),
      result: document.getElementById('result-screen')
    };

    // UI-Elemente
    this.elements = {
      questionText: document.getElementById('question-text'),
      answersContainer: document.getElementById('answers-container'),
      progressBar: document.getElementById('progress'),
      currentQuestion: document.getElementById('current-question'),
      totalQuestions: document.getElementById('total-questions'),
      correctAnswers: document.getElementById('correct-answers'),
      totalAnswered: document.getElementById('total-answered'),
      resultMessage: document.getElementById('result-message'),
      resultBadge: document.getElementById('result-badge-img')
    };
  }

  /**
   * Zeigt einen bestimmten Screen
   * @param {string} screenName - Name des Screens (start, quiz, result)
   */
  showScreen(screenName) {
    Object.values(this.screens).forEach(screen => {
      if (screen) screen.classList.remove('active');
    });

    if (this.screens[screenName]) {
      this.screens[screenName].classList.add('active');
    }
  }

  /**
   * Rendert die Kategorieauswahl
   * @param {Array} categories - Array mit Kategorie-Daten
   * @param {Function} onCategorySelect - Callback bei Kategorieauswahl
   */
  renderCategorySelection(categories, onCategorySelect) {
    const container = document.querySelector('.categories');
    if (!container) return;

    container.innerHTML = '';

    categories.forEach(category => {
      const button = document.createElement('button');
      button.className = 'category-btn';
      button.setAttribute('data-category', category.category);

      button.innerHTML = `
        <span class="emoji">${category.icon}</span>
        <span>${category.displayName}</span>
      `;

      button.addEventListener('click', () => {
        onCategorySelect(category.category);
      });

      container.appendChild(button);
    });
  }

  /**
   * Rendert eine Frage
   * @param {Object} question - Frage-Objekt
   * @param {number} currentIndex - Aktueller Fragenindex (0-basiert)
   * @param {number} totalQuestions - Gesamtanzahl der Fragen
   * @param {Function} onAnswerSelect - Callback bei Antwortauswahl
   */
  renderQuestion(question, currentIndex, totalQuestions, onAnswerSelect) {
    // Frage-Text
    if (this.elements.questionText) {
      this.elements.questionText.textContent = question.question;
    }

    // Fortschritt aktualisieren
    this.updateProgress(currentIndex, totalQuestions);

    // Antworten rendern
    if (this.elements.answersContainer) {
      this.elements.answersContainer.innerHTML = '';

      question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.addEventListener('click', () => onAnswerSelect(index));
        this.elements.answersContainer.appendChild(button);
      });
    }
  }

  /**
   * Aktualisiert den Fortschrittsbalken
   * @param {number} currentIndex - Aktueller Index
   * @param {number} total - Gesamtanzahl
   */
  updateProgress(currentIndex, total) {
    if (this.elements.currentQuestion) {
      this.elements.currentQuestion.textContent = currentIndex + 1;
    }

    if (this.elements.totalQuestions) {
      this.elements.totalQuestions.textContent = total;
    }

    if (this.elements.progressBar) {
      const percentage = ((currentIndex) / total) * 100;
      this.elements.progressBar.style.width = `${percentage}%`;
    }
  }

  /**
   * Markiert die Antworten als richtig/falsch
   * @param {number} selectedIndex - Ausgewählter Antwortindex
   * @param {number} correctIndex - Korrekter Antwortindex
   */
  markAnswer(selectedIndex, correctIndex) {
    const answerButtons = this.elements.answersContainer?.querySelectorAll('.answer-btn');
    if (!answerButtons) return;

    // Alle Buttons deaktivieren
    answerButtons.forEach(button => {
      button.disabled = true;
    });

    // Korrekte Antwort markieren
    if (answerButtons[correctIndex]) {
      answerButtons[correctIndex].classList.add('correct');
    }

    // Falsche Antwort markieren (wenn unterschiedlich)
    if (selectedIndex !== correctIndex && answerButtons[selectedIndex]) {
      answerButtons[selectedIndex].classList.add('incorrect');
    }
  }

  /**
   * Rendert das Ergebnis-Screen
   * @param {Object} stats - Quiz-Statistiken
   */
  renderResult(stats) {
    // Ergebnis-Zahlen
    if (this.elements.correctAnswers) {
      this.elements.correctAnswers.textContent = stats.correctAnswers;
    }

    if (this.elements.totalAnswered) {
      this.elements.totalAnswered.textContent = stats.totalQuestions;
    }

    // Abzeichen
    if (this.elements.resultBadge) {
      const badgeElement = document.getElementById(`${stats.badge}-badge`);
      if (badgeElement) {
        this.elements.resultBadge.src = badgeElement.src;
        this.elements.resultBadge.alt = `${stats.badge} Badge`;
      }
    }

    // Ergebnis-Nachricht
    if (this.elements.resultMessage) {
      this.elements.resultMessage.textContent = this.getResultMessage(stats.percentage);
    }

    this.showScreen('result');
  }

  /**
   * Generiert eine Ergebnis-Nachricht basierend auf der Prozentzahl
   * @param {number} percentage - Prozentsatz richtiger Antworten
   * @returns {string} Ergebnis-Nachricht
   */
  getResultMessage(percentage) {
    if (percentage >= 80) {
      return 'Wow! Du bist ein echter Techero! Fantastische Leistung!';
    } else if (percentage >= 60) {
      return 'Gut gemacht! Du bist auf dem besten Weg, ein Techero zu werden!';
    } else if (percentage >= 40) {
      return 'Nicht schlecht! Mit etwas Übung wirst du noch besser!';
    } else {
      return 'Das war ein guter Anfang! Versuche es noch einmal und du wirst besser werden!';
    }
  }

  /**
   * Zeigt eine Ladeanzeige
   * @param {boolean} show - true zum Anzeigen, false zum Ausblenden
   */
  showLoading(show) {
    // Kann später implementiert werden
    console.log(`Loading: ${show}`);
  }

  /**
   * Zeigt eine Fehlermeldung
   * @param {string} message - Fehlermeldung
   */
  showError(message) {
    alert(`Fehler: ${message}`);
  }

  /**
   * Setzt die UI zurück
   */
  reset() {
    this.showScreen('start');
    if (this.elements.progressBar) {
      this.elements.progressBar.style.width = '0%';
    }
  }
}

export default QuizRenderer;
