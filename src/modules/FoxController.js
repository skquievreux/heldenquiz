/**
 * FoxController Module
 * Steuert T-Fox Animationen, Reaktionen und Emotionen
 */

export class FoxController {
  constructor(config) {
    this.config = config;
    this.foxImage = null;
    this.foxSpeech = null;
    this.foxImages = {};
  }

  /**
   * Initialisiert den Fox Controller mit DOM-Elementen
   * @param {HTMLElement} foxImageElement - Bild-Element für T-Fox
   * @param {HTMLElement} foxSpeechElement - Text-Element für Sprechblase
   */
  init(foxImageElement, foxSpeechElement) {
    this.foxImage = foxImageElement;
    this.foxSpeech = foxSpeechElement;
    this.loadFoxImages();
  }

  /**
   * Lädt alle T-Fox Bilder aus dem DOM
   */
  loadFoxImages() {
    const imageIds = ['t-fox-normal', 't-fox-happy', 't-fox-thinking', 't-fox-sad'];
    imageIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        const key = id.replace('t-fox-', '');
        this.foxImages[key] = element.src;
      }
    });
  }

  /**
   * Ändert die T-Fox Reaktion
   * @param {string} emotion - Emotion (normal, happy, thinking, sad)
   * @param {string|null} message - Nachricht für die Sprechblase (optional)
   */
  setReaction(emotion, message = null) {
    if (this.foxImage && this.foxImages[emotion]) {
      this.foxImage.src = this.foxImages[emotion];

      // Animation hinzufügen
      this.foxImage.style.animation = 'none';
      setTimeout(() => {
        this.foxImage.style.animation = 'bounce 0.5s ease';
      }, 10);
    }

    if (message && this.foxSpeech) {
      this.speak(message);
    }
  }

  /**
   * Lässt T-Fox sprechen
   * @param {string} message - Nachricht
   * @param {number} duration - Anzeigedauer in ms (optional)
   */
  speak(message, duration = null) {
    if (!this.foxSpeech) return;

    this.foxSpeech.textContent = message;

    // Fade-in Animation
    this.foxSpeech.style.opacity = '0';
    setTimeout(() => {
      this.foxSpeech.style.opacity = '1';
    }, 10);

    // Auto-hide nach duration
    if (duration) {
      setTimeout(() => {
        this.fadeOutSpeech();
      }, duration);
    }
  }

  /**
   * Blendet die Sprechblase aus
   */
  fadeOutSpeech() {
    if (this.foxSpeech) {
      this.foxSpeech.style.opacity = '0';
    }
  }

  /**
   * Zeigt eine Begrüßung
   */
  showGreeting() {
    const reactions = this.config.foxReactions || {};
    this.setReaction('normal', reactions.greeting || 'Willkommen!');
  }

  /**
   * Zeigt Reaktion für richtige Antwort
   */
  showCorrectReaction() {
    const reactions = this.config.foxReactions || {};
    const messages = reactions.correct || ['Richtig!'];
    const message = this.getRandomMessage(messages);
    this.setReaction('happy', message);
  }

  /**
   * Zeigt Reaktion für falsche Antwort
   */
  showIncorrectReaction() {
    const reactions = this.config.foxReactions || {};
    const messages = reactions.incorrect || ['Nicht ganz richtig.'];
    const message = this.getRandomMessage(messages);
    this.setReaction('sad', message);
  }

  /**
   * Zeigt Reaktion beim Nachdenken
   * @param {string} category - Kategorie-Name
   */
  showThinkingReaction(category) {
    this.setReaction('thinking', `Los geht's mit der Kategorie "${category}"!`);
  }

  /**
   * Zeigt Reaktion für Ergebnis
   * @param {number} percentage - Prozentsatz richtiger Antworten
   */
  showResultReaction(percentage) {
    const reactions = this.config.foxReactions || {};
    let message, emotion;

    if (percentage >= 80) {
      message = reactions.resultGreat || 'Fantastisch!';
      emotion = 'happy';
    } else if (percentage >= 60) {
      message = reactions.resultGood || 'Gut gemacht!';
      emotion = 'happy';
    } else if (percentage >= 40) {
      message = reactions.resultOkay || 'Nicht schlecht!';
      emotion = 'normal';
    } else {
      message = reactions.resultPoor || 'Versuche es nochmal!';
      emotion = 'thinking';
    }

    this.setReaction(emotion, message);
  }

  /**
   * Zeigt eine Erklärung
   * @param {string} explanation - Erklärung zur Frage
   */
  showExplanation(explanation) {
    this.speak(explanation);
  }

  /**
   * Wählt eine zufällige Nachricht aus einem Array
   * @param {Array<string>} messages - Array mit Nachrichten
   * @returns {string} Zufällige Nachricht
   */
  getRandomMessage(messages) {
    if (!Array.isArray(messages) || messages.length === 0) {
      return '';
    }
    return messages[Math.floor(Math.random() * messages.length)];
  }

  /**
   * Setzt T-Fox zurück
   */
  reset() {
    this.showGreeting();
  }
}

export default FoxController;
