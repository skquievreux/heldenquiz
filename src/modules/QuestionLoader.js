/**
 * QuestionLoader Module
 * Lädt und verwaltet Quiz-Fragen aus JSON-Dateien
 */

export class QuestionLoader {
  constructor(basePath = '/data/questions') {
    this.basePath = basePath;
    this.cache = new Map();
  }

  /**
   * Lädt Fragen für eine bestimmte Kategorie
   * @param {string} category - Kategorie-ID (z.B. 'teamhelden')
   * @returns {Promise<Object>} Kategorie-Objekt mit Fragen
   */
  async loadCategory(category) {
    // Prüfe Cache
    if (this.cache.has(category)) {
      return this.cache.get(category);
    }

    try {
      const response = await fetch(`${this.basePath}/${category}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load category: ${category}`);
      }

      const data = await response.json();
      this.cache.set(category, data);
      return data;
    } catch (error) {
      console.error(`Error loading category ${category}:`, error);
      throw error;
    }
  }

  /**
   * Lädt alle verfügbaren Kategorien
   * @returns {Promise<Object>} Objekt mit allen Kategorien
   */
  async loadAllCategories() {
    const categories = ['teamhelden', 'kreativ', 'weltentdecker', 'gemeinsam'];
    const promises = categories.map(cat => this.loadCategory(cat));

    try {
      const results = await Promise.all(promises);
      return results.reduce((acc, data) => {
        acc[data.category] = data;
        return acc;
      }, {});
    } catch (error) {
      console.error('Error loading categories:', error);
      throw error;
    }
  }

  /**
   * Gibt Metadaten für alle Kategorien zurück (ohne Fragen)
   * @returns {Promise<Array>} Array mit Kategorie-Metadaten
   */
  async getCategoryMetadata() {
    const categories = await this.loadAllCategories();
    return Object.values(categories).map(cat => ({
      category: cat.category,
      displayName: cat.displayName,
      icon: cat.icon,
      questionCount: cat.questions.length
    }));
  }

  /**
   * Mischt ein Array zufällig
   * @param {Array} array - Zu mischendes Array
   * @returns {Array} Gemischtes Array
   */
  static shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Wählt eine zufällige Anzahl von Fragen aus einer Kategorie
   * @param {string} category - Kategorie-ID
   * @param {number} count - Anzahl der zu wählenden Fragen
   * @returns {Promise<Array>} Array mit ausgewählten Fragen
   */
  async getRandomQuestions(category, count) {
    const data = await this.loadCategory(category);
    const shuffled = QuestionLoader.shuffleArray(data.questions);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  /**
   * Leert den Cache
   */
  clearCache() {
    this.cache.clear();
  }
}

export default QuestionLoader;
