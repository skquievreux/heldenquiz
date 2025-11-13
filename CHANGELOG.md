# 📋 Versionshistorie - ...Steffen T-Fox' Techero-Quiz

Alle nennenswerten Änderungen werden in dieser Datei dokumentiert.  
Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/) und folgt [Semantic Versioning](https://semver.org/lang/de/).

---

## 🚀 Major-Versionen (Breaking Changes)

### [2.0.0] - Geplant für 2026
- **Breaking Changes**: Vollständige API-Überarbeitung
- Neue Datenbank-Integration
- Multi-Language-Unterstützung

### [1.0.0] - 2025-01-03
**🎉 Initiales Release des ...Steffen T-Fox Techero-Quiz**

#### ✨ Neue Features
- Vier Quiz-Kategorien mit insgesamt 142 Fragen:
  - 🦊 **Teamhelden** (37 Fragen)
  - 🎨 **Kreativ-Ecke** (37 Fragen)
  - 🌍 **Weltentdecker** (34 Fragen)
  - 🛡️ **Gemeinsam stark** (34 Fragen)
- T-Fox als interaktiver Quiz-Moderator mit verschiedenen Emotionen
- Responsive Design für alle Geräte
- Fortschrittsanzeige und farbliches Feedback
- Abzeichen-System (Gold/Silber/Bronze)
- Social Media Sharing
- Zufällige Fragenauswahl

#### 🛠️ Technologie-Stack
- HTML5, CSS3, Vanilla JavaScript (ES6+)
- Google Fonts (Nunito), SVG-Grafiken

---

## 🔄 Minor-Versionen (Neue Features)

### [1.2.0] - 2025-01-05
**Social Media Integration**

#### ✨ Neue Features
- Docker Deployment für Fly.io
- Social Media Sharing für Quiz-Ergebnisse:
  - 🐦 Twitter Integration
  - 📘 Facebook Integration
  - 💬 WhatsApp Integration
  - 💼 LinkedIn Integration

### [1.1.0] - 2025-01-04
**Modulare Architektur & Erweiterte Fragen**

#### ✨ Neue Features
- **Modulare Architektur**: Komplette Neustrukturierung
  - `QuestionLoader.js`: Fragen-Management
  - `QuizState.js`: State Management
  - `FoxController.js`: T-Fox Steuerung
  - `QuizRenderer.js`: UI Rendering
- **Externe Konfiguration**: `config.json` für alle Einstellungen
- **JSON-Datenbank**: Fragen in separate Dateien ausgelagert
- **Build-System**: Vite für moderne Entwicklung
- **LocalStorage**: Quiz-Statistiken speichern
- **Export/Import**: Quiz-Zustand sichern/wiederherstellen

#### 📚 Verbesserungen
- 20 neue Fragen pro Kategorie (60 Gesamt)
- Umfassende Dokumentation (README, CHANGELOG, CONTRIBUTING)
- Professionelle Projektstruktur

---

## 🐛 Bugfix-Versionen (Korrekturen)

### [1.1.4] - 2025-11-13
**Versionshistorie-Feature**

#### ✨ Neue Features
- **Versionshistorie in der Applikation**: Anklickbarer Button im Footer
- **Strukturierte Anzeige**: Versionen nach Major/Minor/Bugfix gruppiert
- **Professionelles Modal**: Responsive Design mit Animationen
- **Deutsche Lokalisierung**: Vollständig auf Deutsch
- **Automatisches Parsing**: CHANGELOG.md wird automatisch eingelesen

#### 🐛 Behoben
- Versionshistorie-Button hinzugefügt
- Modal-Design für mobile Geräte optimiert
- ChangelogViewer Modul implementiert

### [1.1.3] - 2025-11-13
**Professionelles Versionsmanagement**

#### ✨ Neue Features
- Semantisches Versionssystem implementiert
- Separate Asset-Versionierung (Bilder, CSS, JS)
- Automatische Versionserhöhung per NPM Scripts
- Cache-Busting für Bilder
- Versionshistorie in der Applikation

#### 🐛 Behoben
- Versionsanzeige im Footer korrigiert
- Cache-Probleme bei Bild-Updates behoben

### [1.1.2] - 2025-11-13
**Bugfixes und Verbesserungen**

#### 🐛 Behoben
- Fehlerhafte Versionsanzeige behoben
- Timing-Probleme bei Antwort-Feedback korrigiert
- Mobile Responsiveness verbessert

### [1.1.1] - 2025-11-06
**Versionsanzeige & Logging**

#### ✨ Neue Features
- Versionsnummer im Footer der Startseite
- Versionsinformation in Browser-Console

---

## 🔮 Geplante Versionen

### [1.3.0] - Q1 2026
- **Neue Kategorie**: "Digitale Helden" (Programmierung für Kinder)
- **Gamification**: Achievement-System erweitern
- **Offline-Modus**: Lokales Spielen ohne Internet

### [1.4.0] - Q2 2026
- **Multiplayer**: Gegeneinander spielen
- **Eltern-Dashboard**: Fortschritt verfolgen
- **KI-gestützte Anpassung**: Schwierigkeitsgrad automatisch anpassen

---

## 📊 Versionsübersicht

| Version | Typ | Datum | Änderungen |
|---------|-----|-------|------------|
| 2.0.0 | Major | Geplant | Breaking Changes |
| 1.4.0 | Minor | Geplant | Multiplayer |
| 1.3.0 | Minor | Geplant | Neue Kategorie |
| 1.2.0 | Minor | 2025-01-05 | Social Media |
| 1.1.4 | Patch | 2025-11-13 | Versionshistorie |
| 1.1.3 | Patch | 2025-11-13 | Versionssystem |
| 1.1.2 | Patch | 2025-11-13 | Bugfixes |
| 1.1.1 | Patch | 2025-11-06 | Versionsanzeige |
| 1.1.0 | Minor | 2025-01-04 | Modulare Architektur |
| 1.0.0 | Major | 2025-01-03 | Initial Release |

---

## 🏷️ Versionsschema

Dieses Projekt folgt **Semantic Versioning** (SemVer):
- **MAJOR** (X.y.z): Inkompatible API-Änderungen
- **MINOR** (x.Y.z): Neue Funktionalität (abwärtskompatibel)
- **PATCH** (x.y.Z): Bugfixes (abwärtskompatibel)

### Beispiel:
- `1.2.3` → Major: 1, Minor: 2, Patch: 3
- Bugfix: `1.2.3` → `1.2.4`
- Neues Feature: `1.2.4` → `1.3.0`
- Breaking Change: `1.3.0` → `2.0.0`

---

## 🔗 Links & Ressourcen

- [📖 Vollständige Dokumentation](README.md)
- [🐛 Issues & Bug Reports](https://github.com/skquievreux/heldenquiz/issues)
- [🚀 Repository](https://github.com/skquievreux/heldenquiz)
- [🤝 Beitragen](CONTRIBUTING.md)

---

*Zuletzt aktualisiert: 2025-11-13 (Version 1.1.4)*