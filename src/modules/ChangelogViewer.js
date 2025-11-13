/**
 * ChangelogViewer - Zeigt Versionshistorie strukturiert an
 * Parst CHANGELOG.md und zeigt Versionen nach Typ gruppiert
 */

export class ChangelogViewer {
  constructor() {
    this.changelogData = null;
    this.isLoaded = false;
  }

  /**
   * Lädt und parst die CHANGELOG.md Datei
   * @returns {Promise<Object>} Strukturierte Changelog-Daten
   */
  async loadChangelog() {
    try {
      if (this.isLoaded) {
        return this.changelogData;
      }

      const response = await fetch('/CHANGELOG.md');
      if (!response.ok) {
        throw new Error('Changelog konnte nicht geladen werden');
      }

      const markdown = await response.text();
      this.changelogData = this.parseChangelog(markdown);
      this.isLoaded = true;

      return this.changelogData;
    } catch (error) {
      console.warn('ChangelogViewer: Konnte CHANGELOG.md nicht laden', error);
      return this.getFallbackChangelog();
    }
  }

  /**
   * Parst Markdown-Changelog in strukturierte Daten
   * @param {string} markdown - CHANGELOG.md Inhalt
   * @returns {Object} Strukturierte Daten
   */
  parseChangelog(markdown) {
    const sections = {
      major: [],
      minor: [],
      patch: [],
      planned: []
    };

    const lines = markdown.split('\n');
    let currentSection = null;
    let currentVersion = null;
    let currentVersionData = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Major-Versionen erkennen
      if (line.startsWith('### [') && line.includes('] - ') && !line.includes('Geplant')) {
        const versionMatch = line.match(/### \[(\d+)\.(\d+)\.(\d+)\]/);
        if (versionMatch) {
          const major = parseInt(versionMatch[1]);
          const minor = parseInt(versionMatch[2]);
          const patch = parseInt(versionMatch[3]);

          currentVersion = `${major}.${minor}.${patch}`;
          currentVersionData = {
            version: currentVersion,
            date: this.extractDate(line),
            title: this.extractTitle(lines, i),
            changes: [],
            type: this.getVersionType(major, minor, patch)
          };

          sections[currentVersionData.type].push(currentVersionData);
          currentSection = currentVersionData.type;
        }
      }

      // Geplante Versionen
      else if (line.startsWith('### [') && line.includes('] - Q')) {
        const versionMatch = line.match(/### \[(\d+)\.(\d+)\.(\d+)\]/);
        if (versionMatch) {
          currentVersion = `${versionMatch[1]}.${versionMatch[2]}.${versionMatch[3]}`;
          currentVersionData = {
            version: currentVersion,
            date: 'Geplant',
            title: this.extractTitle(lines, i),
            changes: [],
            type: 'planned'
          };

          sections.planned.push(currentVersionData);
          currentSection = 'planned';
        }
      }

      // Änderungen sammeln
      else if (currentVersionData && (line.startsWith('- ') || line.startsWith('####'))) {
        if (line.startsWith('- ')) {
          currentVersionData.changes.push(line.substring(2));
        } else if (line.startsWith('####')) {
          // Neue Untersektion
          const sectionTitle = line.substring(4).trim();
          currentVersionData.changes.push(`**${sectionTitle}:**`);
        }
      }
    }

    return sections;
  }

  /**
   * Extrahiert das Datum aus einer Versionszeile
   * @param {string} line - Versionszeile
   * @returns {string} Datum oder 'Unbekannt'
   */
  extractDate(line) {
    const dateMatch = line.match(/- (\d{4}-\d{2}-\d{2}|\w+ \d{4}|Q\d \d{4}|Geplant)/);
    return dateMatch ? dateMatch[1] : 'Unbekannt';
  }

  /**
   * Extrahiert den Titel aus den nächsten Zeilen
   * @param {string[]} lines - Alle Zeilen
   * @param {number} currentIndex - Aktuelle Zeile
   * @returns {string} Titel oder leerer String
   */
  extractTitle(lines, currentIndex) {
    // Suche nach der nächsten nicht-leeren Zeile nach der Versionszeile
    for (let i = currentIndex + 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line && !line.startsWith('###') && !line.startsWith('-')) {
        return line.replace(/\*\*/g, ''); // Entferne Markdown-Bold
      }
      if (line.startsWith('###') || line.startsWith('---')) {
        break; // Neue Sektion erreicht
      }
    }
    return '';
  }

  /**
   * Bestimmt den Versionstyp basierend auf der Versionsnummer
   * @param {number} major - Major-Version
   * @param {number} minor - Minor-Version
   * @param {number} patch - Patch-Version
   * @returns {string} 'major', 'minor', oder 'patch'
   */
  getVersionType(major, minor, patch) {
    if (patch > 0) return 'patch';
    if (minor > 0) return 'minor';
    return 'major';
  }

  /**
   * Fallback-Changelog für den Fall, dass die Datei nicht geladen werden kann
   * @returns {Object} Basis-Changelog
   */
  getFallbackChangelog() {
    return {
      major: [{
        version: '1.0.0',
        date: '2025-01-03',
        title: 'Initiales Release',
        changes: ['Grundlegendes Quiz-System', 'Vier Kategorien', 'T-Fox Charakter'],
        type: 'major'
      }],
      minor: [{
        version: '1.1.0',
        date: '2025-01-04',
        title: 'Modulare Architektur',
        changes: ['Neustrukturierung', 'Externe Konfiguration', 'Build-System'],
        type: 'minor'
      }],
      patch: [{
        version: '1.1.3',
        date: '2025-11-13',
        title: 'Versionsmanagement',
        changes: ['Semantisches Versionierung', 'Asset-Versionierung'],
        type: 'patch'
      }],
      planned: [{
        version: '1.3.0',
        date: 'Geplant',
        title: 'Neue Features',
        changes: ['Neue Kategorie', 'Gamification'],
        type: 'planned'
      }]
    };
  }

  /**
   * Erstellt HTML für die Changelog-Anzeige
   * @returns {Promise<string>} HTML-String
   */
  async renderChangelog() {
    const data = await this.loadChangelog();

    return `
      <div class="changelog-modal">
        <div class="changelog-header">
          <h2>📋 Versionshistorie</h2>
          <p>...Steffen T-Fox' Techero-Quiz</p>
        </div>

        <div class="changelog-content">
          ${this.renderSection('🚀 Major-Versionen', data.major, 'major')}
          ${this.renderSection('🔄 Minor-Versionen', data.minor, 'minor')}
          ${this.renderSection('🐛 Bugfix-Versionen', data.patch, 'patch')}
          ${this.renderSection('🔮 Geplante Versionen', data.planned, 'planned')}
        </div>

        <div class="changelog-footer">
          <p>📊 Übersicht aller Versionen in der Tabelle oben</p>
          <p>🔗 <a href="https://github.com/skquievreux/heldenquiz" target="_blank">Vollständiges Repository</a></p>
        </div>
      </div>
    `;
  }

  /**
   * Rendert eine einzelne Sektion
   * @param {string} title - Sektionstitel
   * @param {Array} versions - Versions-Array
   * @param {string} type - Typ der Sektion
   * @returns {string} HTML-String
   */
  renderSection(title, versions, type) {
    if (versions.length === 0) return '';

    const versionItems = versions.map(version => `
      <div class="changelog-version ${type}">
        <div class="version-header">
          <span class="version-number">${version.version}</span>
          <span class="version-date">${version.date}</span>
        </div>
        ${version.title ? `<div class="version-title">${version.title}</div>` : ''}
        <ul class="version-changes">
          ${version.changes.map(change => `<li>${change}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    return `
      <div class="changelog-section">
        <h3>${title} (${versions.length})</h3>
        <div class="versions-list">
          ${versionItems}
        </div>
      </div>
    `;
  }

  /**
   * Zeigt das Changelog in einem Modal an
   * @param {HTMLElement} container - Container für das Modal
   */
  async showModal(container = document.body) {
    const html = await this.renderChangelog();

    const modal = document.createElement('div');
    modal.className = 'changelog-overlay';
    modal.innerHTML = `
      ${html}
      <button class="changelog-close" aria-label="Schließen">✕</button>
    `;

    // Event Listener für Schließen
    const closeBtn = modal.querySelector('.changelog-close');
    closeBtn.addEventListener('click', () => {
      modal.remove();
    });

    // Schließen bei Klick außerhalb
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });

    // ESC-Taste zum Schließen
    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        modal.remove();
        document.removeEventListener('keydown', escHandler);
      }
    });

    container.appendChild(modal);
  }
}

// Exportiere globale Instanz
export const changelogViewer = new ChangelogViewer();