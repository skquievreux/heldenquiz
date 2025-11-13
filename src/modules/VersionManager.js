/**
 * VersionManager - Professionelles Versionsmanagement
 * Verwaltet semantische Versionierung und Asset-Versionen
 */

export class VersionManager {
  constructor() {
    this.versionData = null;
    this.isLoaded = false;
  }

  /**
   * Lädt die Versionsdaten aus der version.json Datei
   * @returns {Promise<Object>} Versionsdaten
   */
  async loadVersion() {
    try {
      if (this.isLoaded) {
        return this.versionData;
      }

      const response = await fetch('/version.json');
      if (!response.ok) {
        throw new Error('Version file could not be loaded');
      }

      this.versionData = await response.json();
      this.isLoaded = true;

      return this.versionData;
    } catch (error) {
      console.warn('VersionManager: Could not load version.json, using fallback', error);
      // Fallback-Version
      this.versionData = {
        version: '1.1.2',
        major: 1,
        minor: 1,
        patch: 2,
        assets: {
          images: '1.0.0',
          css: '1.0.0',
          js: '1.1.2'
        }
      };
      this.isLoaded = true;
      return this.versionData;
    }
  }

  /**
   * Gibt die vollständige Versionsnummer zurück
   * @returns {Promise<string>} Vollständige Version (z.B. "1.1.2")
   */
  async getVersion() {
    const data = await this.loadVersion();
    return data.version;
  }

  /**
   * Gibt die Version für einen bestimmten Asset-Typ zurück
   * @param {string} assetType - Typ des Assets ('images', 'css', 'js')
   * @returns {Promise<string>} Asset-Version
   */
  async getAssetVersion(assetType) {
    const data = await this.loadVersion();
    return data.assets[assetType] || data.version;
  }

  /**
   * Gibt die semantischen Versionskomponenten zurück
   * @returns {Promise<Object>} {major, minor, patch}
   */
  async getSemanticVersion() {
    const data = await this.loadVersion();
    return {
      major: data.major,
      minor: data.minor,
      patch: data.patch
    };
  }

  /**
   * Erstellt eine Versionsnummer aus Komponenten
   * @param {number} major - Major version
   * @param {number} minor - Minor version
   * @param {number} patch - Patch version
   * @returns {string} Formatierte Version
   */
  static formatVersion(major, minor, patch) {
    return `${major}.${minor}.${patch}`;
  }

  /**
   * Erhöht die Patch-Version (für Bug-Fixes)
   * @returns {Promise<Object>} Neue Versionsdaten
   */
  async bumpPatch() {
    const data = await this.loadVersion();
    data.patch += 1;
    data.version = VersionManager.formatVersion(data.major, data.minor, data.patch);
    data.lastUpdated = new Date().toISOString().split('T')[0];
    data.changelog = 'Bug fixes';
    return data;
  }

  /**
   * Erhöht die Minor-Version (für neue Features)
   * @returns {Promise<Object>} Neue Versionsdaten
   */
  async bumpMinor() {
    const data = await this.loadVersion();
    data.minor += 1;
    data.patch = 0;
    data.version = VersionManager.formatVersion(data.major, data.minor, data.patch);
    data.lastUpdated = new Date().toISOString().split('T')[0];
    data.changelog = 'New features';
    return data;
  }

  /**
   * Erhöht die Major-Version (für Breaking Changes)
   * @returns {Promise<Object>} Neue Versionsdaten
   */
  async bumpMajor() {
    const data = await this.loadVersion();
    data.major += 1;
    data.minor = 0;
    data.patch = 0;
    data.version = VersionManager.formatVersion(data.major, data.minor, data.patch);
    data.lastUpdated = new Date().toISOString().split('T')[0];
    data.changelog = 'Major changes';
    return data;
  }

  /**
   * Aktualisiert die Bildversion
   * @returns {Promise<Object>} Neue Versionsdaten
   */
  async bumpImageVersion() {
    const data = await this.loadVersion();
    const currentImageVersion = data.assets.images.split('.');
    const patch = parseInt(currentImageVersion[2]) + 1;
    data.assets.images = `${currentImageVersion[0]}.${currentImageVersion[1]}.${patch}`;
    data.lastUpdated = new Date().toISOString().split('T')[0];
    return data;
  }

  /**
   * Gibt eine URL mit Cache-Busting für Assets zurück
   * @param {string} assetPath - Pfad zum Asset
   * @param {string} assetType - Typ des Assets ('images', 'css', 'js')
   * @returns {Promise<string>} URL mit Version-Parameter
   */
  async getAssetUrl(assetPath, assetType = 'images') {
    const version = await this.getAssetVersion(assetType);
    const separator = assetPath.includes('?') ? '&' : '?';
    return `${assetPath}${separator}v=${version}`;
  }

  /**
   * Cache-Busting für alle Bilder in einem Container
   * @param {HTMLElement} container - Container-Element
   * @returns {Promise<void>}
   */
  async applyImageCacheBusting(container = document) {
    const images = container.querySelectorAll('img');
    const imageVersion = await this.getAssetVersion('images');

    images.forEach(img => {
      if (img.src && !img.src.includes('data:') && !img.src.includes('?v=')) {
        const separator = img.src.includes('?') ? '&' : '?';
        img.src = `${img.src}${separator}v=${imageVersion}`;
      }
    });
  }

  /**
   * Gibt Versionsinformationen für Debugging zurück
   * @returns {Promise<Object>} Debug-Informationen
   */
  async getDebugInfo() {
    const data = await this.loadVersion();
    return {
      version: data.version,
      semantic: await this.getSemanticVersion(),
      assets: data.assets,
      lastUpdated: data.lastUpdated,
      changelog: data.changelog
    };
  }
}

// Exportiere eine globale Instanz
export const versionManager = new VersionManager();