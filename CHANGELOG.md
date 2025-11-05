# Changelog

Alle bemerkenswerten Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [1.1.0] - 2025-11-05

### ✨ Hinzugefügt
- **Modulare Architektur**: Komplette Neustrukturierung mit separaten Modulen
  - `QuestionLoader.js`: Lädt und verwaltet Fragen aus JSON-Dateien
  - `QuizState.js`: Zentrales State Management für den Quiz-Zustand
  - `FoxController.js`: Steuerung von T-Fox Animationen und Reaktionen
  - `QuizRenderer.js`: UI-Rendering und -Updates
- **Externe Konfiguration**: `config.json` für alle Einstellungen
  - Anzahl der Fragen pro Quiz
  - Abzeichen-Schwellenwerte
  - T-Fox Reaktionen
  - Kategorie-Definitionen
  - Timing-Einstellungen
- **JSON-Datenbank**: Fragen in separate JSON-Dateien externalisiert
  - `data/questions/teamhelden.json` (37 Fragen)
  - `data/questions/kreativ.json` (37 Fragen)
  - `data/questions/weltentdecker.json` (34 Fragen)
  - `data/questions/gemeinsam.json` (34 Fragen)
- **Build-System**: Vite für moderne Entwicklung und optimierte Builds
  - Hot Module Replacement im Dev-Modus
  - Optimierte Produkt ions-Builds
  - Tree-shaking und Code-Splitting
- **Professionelle Dokumentation**
  - Umfassendes README.md mit Badges und strukturierter Dokumentation
  - CHANGELOG.md für Versionshistorie
  - CONTRIBUTING.md mit Beitragsrichtlinien
- **Verbesserte Projektstruktur**
  - Klare Trennung von Source-Code (`src/`), Daten (`data/`) und Public Assets (`public/`)
  - Modulare Verzeichnisstruktur für bessere Wartbarkeit
- **LocalStorage-Integration**: Automatisches Speichern der Quiz-Statistiken
- **Export/Import-Funktionalität**: Quiz-Zustand kann exportiert und importiert werden

### 🔄 Geändert
- **HTML-Einbindung**: Von `<script>` zu `<script type="module">`
- **Package.json**: Aktualisiert mit modernen Scripts und Dependencies
  - `npm run dev`: Entwicklungsserver
  - `npm run build`: Produktions-Build
  - `npm run preview`: Vorschau der Build-Version
- **Versionsnummer**: Von 1.0.0 auf 1.1.0 erhöht
- **Code-Organisation**: Bessere Strukturierung und Kommentierung

### 🐛 Behoben
- Verbesserte Fehlerbehandlung beim Laden von Fragen
- Robustere Konfigurationsladung mit Fallback-Werten

### 📚 Dokumentation
- Vollständig überarbeitetes README.md
- Neue CHANGELOG.md hinzugefügt
- Neue CONTRIBUTING.md hinzugefügt
- Inline-Code-Kommentare verbessert
- JSDoc-Kommentare für alle Module hinzugefügt

### 🏗️ Technische Details
- **Breaking Changes**:
  - Alte `questions.js` wird nicht mehr direkt verwendet (aber als Backup beibehalten)
  - Alte `script.js` wird nicht mehr verwendet (aber als Legacy-Code beibehalten)
  - Neues Modul-System erfordert ES6-Module-Unterstützung
- **Migration Path**:
  - Bestehende Deployments sollten `npm install` und `npm run build` ausführen
  - Alte statische Deployments müssen auf Vite umgestellt werden

## [1.0.0] - 2025-01-XX

### 🎉 Initiales Release

#### Hinzugefügt
- Grundlegendes Quiz-System mit 4 Kategorien
  - 🦊 Teamhelden (37 Fragen)
  - 🎨 Kreativ-Ecke (37 Fragen)
  - 🌍 Weltentdecker (34 Fragen)
  - 🛡️ Gemeinsam stark (34 Fragen)
- T-Fox als interaktiver Quiz-Moderator
  - Verschiedene Emotionen (normal, happy, thinking, sad)
  - Dynamische Reaktionen auf Antworten
  - Motivierende Nachrichten
- Responsive Design für alle Geräte
- Fortschrittsanzeige während des Quiz
- Abzeichen-System basierend auf Leistung
  - 🥇 Gold (≥80%)
  - 🥈 Silber (≥60%)
  - 🥉 Bronze (≥40%)
  - 🔄 Versuche es nochmal (<40%)
- Social Media Sharing-Funktionen
  - Twitter
  - Facebook
  - WhatsApp
  - LinkedIn
- Zufällige Fragenauswahl pro Quiz
- Erklärungen nach jeder Antwort
- Visuelle Feedback-Mechanismen (farbliche Markierung)
- Docker-Deployment-Konfiguration für Fly.io

#### Technologie-Stack
- HTML5
- CSS3 mit modernen Features
  - CSS Grid und Flexbox
  - CSS Animationen
  - CSS Custom Properties
- Vanilla JavaScript (ES6+)
- Google Fonts (Nunito)
- SVG-Grafiken für T-Fox und Abzeichen

---

## Versionsschema

Dieses Projekt folgt [Semantic Versioning](https://semver.org/):
- **MAJOR**: Inkompatible API-Änderungen
- **MINOR**: Neue Funktionalität (abwärtskompatibel)
- **PATCH**: Bugfixes (abwärtskompatibel)

## Links

- [Repository](https://github.com/skquievreux/heldenquiz)
- [Issues](https://github.com/skquievreux/heldenquiz/issues)
- [Pull Requests](https://github.com/skquievreux/heldenquiz/pulls)
