/**
 * QuizState Module
 * Verwaltet den Zustand des Quiz (State Management)
 */

export class QuizState {
  constructor(config) {
    this.config = config;
    this.reset();
  }

  /**
   * Setzt den Quiz-Zustand zurück
   */
  reset() {
    this.currentCategory = null;
    this.currentQuestions = [];
    this.currentQuestionIndex = 0;
    this.correctAnswers = 0;
    this.answers = []; // Historie der Antworten
    this.startTime = null;
    this.endTime = null;
  }

  /**
   * Startet ein neues Quiz
   * @param {string} category - Kategorie-ID
   * @param {Array} questions - Array mit Fragen
   */
  startQuiz(category, questions) {
    this.reset();
    this.currentCategory = category;
    this.currentQuestions = questions;
    this.startTime = Date.now();
  }

  /**
   * Gibt die aktuelle Frage zurück
   * @returns {Object|null} Aktuelle Frage oder null
   */
  getCurrentQuestion() {
    if (this.currentQuestionIndex >= this.currentQuestions.length) {
      return null;
    }
    return this.currentQuestions[this.currentQuestionIndex];
  }

  /**
   * Verarbeitet eine Antwort
   * @param {number} answerIndex - Index der gewählten Antwort
   * @returns {Object} Ergebnis mit isCorrect, correctAnswer, explanation
   */
  submitAnswer(answerIndex) {
    const question = this.getCurrentQuestion();
    if (!question) {
      throw new Error('No current question available');
    }

    const isCorrect = answerIndex === question.correctAnswer;
    if (isCorrect) {
      this.correctAnswers++;
    }

    const result = {
      questionIndex: this.currentQuestionIndex,
      question: question.question,
      selectedAnswer: answerIndex,
      correctAnswer: question.correctAnswer,
      isCorrect,
      explanation: question.explanation,
      timestamp: Date.now()
    };

    this.answers.push(result);
    return result;
  }

  /**
   * Geht zur nächsten Frage
   * @returns {boolean} true wenn weitere Fragen vorhanden, false wenn Quiz beendet
   */
  nextQuestion() {
    this.currentQuestionIndex++;
    return this.currentQuestionIndex < this.currentQuestions.length;
  }

  /**
   * Prüft, ob das Quiz beendet ist
   * @returns {boolean} true wenn keine weiteren Fragen
   */
  isQuizComplete() {
    return this.currentQuestionIndex >= this.currentQuestions.length;
  }

  /**
   * Gibt die Statistiken des Quiz zurück
   * @returns {Object} Quiz-Statistiken
   */
  getStats() {
    if (this.isQuizComplete() && !this.endTime) {
      this.endTime = Date.now();
    }

    const totalQuestions = this.currentQuestions.length;
    const percentage = totalQuestions > 0
      ? Math.round((this.correctAnswers / totalQuestions) * 100)
      : 0;

    const duration = this.endTime && this.startTime
      ? Math.round((this.endTime - this.startTime) / 1000)
      : null;

    return {
      category: this.currentCategory,
      totalQuestions,
      correctAnswers: this.correctAnswers,
      incorrectAnswers: totalQuestions - this.correctAnswers,
      percentage,
      duration,
      answers: this.answers,
      badge: this.getBadgeLevel(percentage)
    };
  }

  /**
   * Bestimmt das Abzeichen-Level basierend auf der Prozentzahl
   * @param {number} percentage - Prozentsatz richtiger Antworten
   * @returns {string} Badge-Level (gold, silver, bronze, try-again)
   */
  getBadgeLevel(percentage) {
    const thresholds = this.config.badgeThresholds || {
      gold: 80,
      silver: 60,
      bronze: 40
    };

    if (percentage >= thresholds.gold) return 'gold';
    if (percentage >= thresholds.silver) return 'silver';
    if (percentage >= thresholds.bronze) return 'bronze';
    return 'try-again';
  }

  /**
   * Gibt den Fortschritt als Prozentsatz zurück
   * @returns {number} Fortschritt in Prozent (0-100)
   */
  getProgress() {
    if (this.currentQuestions.length === 0) return 0;
    return Math.round((this.currentQuestionIndex / this.currentQuestions.length) * 100);
  }

  /**
   * Exportiert den aktuellen Zustand als JSON
   * @returns {string} JSON-String des Zustands
   */
  export() {
    return JSON.stringify({
      currentCategory: this.currentCategory,
      currentQuestionIndex: this.currentQuestionIndex,
      correctAnswers: this.correctAnswers,
      answers: this.answers,
      startTime: this.startTime,
      endTime: this.endTime
    });
  }

  /**
   * Importiert einen Zustand aus JSON
   * @param {string} jsonString - JSON-String des Zustands
   */
  import(jsonString) {
    const data = JSON.parse(jsonString);
    Object.assign(this, data);
  }
}

export default QuizState;
