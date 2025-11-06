/**
 * T-Fox Techero-Quiz - Hauptanwendung
 * Version 1.1.0
 */

import { QuestionLoader } from './modules/QuestionLoader.js';
import { QuizState } from './modules/QuizState.js';
import { FoxController } from './modules/FoxController.js';
import { QuizRenderer } from './modules/QuizRenderer.js';

class TecheroQuiz {
  constructor() {
    this.config = null;
    this.questionLoader = null;
    this.quizState = null;
    this.foxController = null;
    this.renderer = null;
    this.categoryMetadata = [];
  }

  /**
   * Initialisiert die Anwendung
   */
  async init() {
    try {
      // Lade Konfiguration
      await this.loadConfig();

      // Initialisiere Module
      this.questionLoader = new QuestionLoader();
      this.quizState = new QuizState(this.config);
      this.foxController = new FoxController(this.config);
      this.renderer = new QuizRenderer();

      // Initialisiere UI
      this.renderer.init();
      this.foxController.init(
        document.getElementById('fox-image'),
        document.getElementById('fox-speech')
      );

      // Lade Kategorie-Metadaten
      this.categoryMetadata = await this.questionLoader.getCategoryMetadata();

      // Setup Event Listeners
      this.setupEventListeners();

      // Zeige Begrüßung
      this.foxController.showGreeting();

      // Rendere Kategorieauswahl
      this.renderer.renderCategorySelection(
        this.categoryMetadata,
        (category) => this.startQuiz(category)
      );

      console.log('✓ T-Fox Techero-Quiz erfolgreich initialisiert!');
    } catch (error) {
      console.error('Fehler bei der Initialisierung:', error);
      this.renderer.showError('Das Quiz konnte nicht geladen werden.');
    }
  }

  /**
   * Lädt die Konfiguration
   */
  async loadConfig() {
    try {
      const response = await fetch('./src/config.json');
      if (!response.ok) {
        throw new Error('Config konnte nicht geladen werden');
      }
      this.config = await response.json();
    } catch (error) {
      console.error('Fehler beim Laden der Config:', error);
      // Fallback-Konfiguration
      this.config = {
        questionsPerQuiz: 5,
        badgeThresholds: { gold: 80, silver: 60, bronze: 40 },
        foxReactions: {}
      };
    }
  }

  /**
   * Setup Event Listeners
   */
  setupEventListeners() {
    // Restart-Button
    const restartButton = document.getElementById('restart-btn');
    if (restartButton) {
      restartButton.addEventListener('click', () => this.restartQuiz());
    }
  }

  /**
   * Startet ein neues Quiz
   * @param {string} category - Kategorie-ID
   */
  async startQuiz(category) {
    try {
      this.renderer.showLoading(true);

      // Lade Fragen für die Kategorie
      const questions = await this.questionLoader.getRandomQuestions(
        category,
        this.config.questionsPerQuiz
      );

      // Starte Quiz
      this.quizState.startQuiz(category, questions);

      // Finde Kategorie-Name
      const categoryData = this.categoryMetadata.find(c => c.category === category);
      const categoryName = categoryData ? categoryData.displayName : category;

      // Zeige Quiz-Screen
      this.renderer.showScreen('quiz');
      this.foxController.showThinkingReaction(categoryName);

      // Zeige erste Frage
      this.showCurrentQuestion();

      this.renderer.showLoading(false);
    } catch (error) {
      console.error('Fehler beim Starten des Quiz:', error);
      this.renderer.showError('Das Quiz konnte nicht gestartet werden.');
      this.renderer.showLoading(false);
    }
  }

  /**
   * Zeigt die aktuelle Frage
   */
  showCurrentQuestion() {
    const question = this.quizState.getCurrentQuestion();
    if (!question) {
      this.showResult();
      return;
    }

    this.renderer.renderQuestion(
      question,
      this.quizState.currentQuestionIndex,
      this.quizState.currentQuestions.length,
      (answerIndex) => this.handleAnswer(answerIndex)
    );
  }

  /**
   * Verarbeitet eine Antwort
   * @param {number} answerIndex - Index der gewählten Antwort
   */
  handleAnswer(answerIndex) {
    const result = this.quizState.submitAnswer(answerIndex);

    // Markiere Antworten
    this.renderer.markAnswer(result.selectedAnswer, result.correctAnswer);

    // Zeige Fox-Reaktion
    if (result.isCorrect) {
      this.foxController.showCorrectReaction();
    } else {
      this.foxController.showIncorrectReaction();
    }

    // Zeige Erklärung nach kurzer Verzögerung
    setTimeout(() => {
      this.foxController.showExplanation(result.explanation);

      // Gehe zur nächsten Frage
      setTimeout(() => {
        if (this.quizState.nextQuestion()) {
          this.showCurrentQuestion();
        } else {
          this.showResult();
        }
      }, this.config.timings?.explanationDuration || 3000);
    }, this.config.timings?.answerFeedbackDelay || 1500);
  }

  /**
   * Zeigt das Ergebnis
   */
  showResult() {
    const stats = this.quizState.getStats();
    this.renderer.renderResult(stats);
    this.foxController.showResultReaction(stats.percentage);

    // Speichere Statistik (optional)
    this.saveStats(stats);
  }

  /**
   * Speichert Statistiken im LocalStorage
   * @param {Object} stats - Quiz-Statistiken
   */
  saveStats(stats) {
    try {
      const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
      history.push({
        ...stats,
        timestamp: new Date().toISOString()
      });

      // Behalte nur die letzten 50 Einträge
      if (history.length > 50) {
        history.shift();
      }

      localStorage.setItem('quizHistory', JSON.stringify(history));
    } catch (error) {
      console.error('Fehler beim Speichern der Statistiken:', error);
    }
  }

  /**
   * Startet das Quiz neu
   */
  restartQuiz() {
    this.quizState.reset();
    this.foxController.reset();
    this.renderer.reset();
  }
}

// Exportiere für globalen Zugriff
window.TecheroQuiz = TecheroQuiz;

// Initialisiere beim Laden der Seite
window.addEventListener('DOMContentLoaded', async () => {
  const quiz = new TecheroQuiz();
  await quiz.init();
  window.techeroQuizInstance = quiz;
});

export default TecheroQuiz;
