# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [Unreleased]

### Hinzugefügt
- Admin-Interface für KI-gestützte Fragengenerierung
- Vercel Serverless Function für API-Integration mit Anthropic Claude
- CHANGELOG.md zur Versionsdokumentation

### Geändert
- README.md aktualisiert mit Vercel Deployment-Informationen
- Migration von Fly.io zu Vercel

### Entfernt
- Fly.io Konfigurationsdateien (Dockerfile, fly.toml)

## [1.2.0] - 2025-01-05

### Hinzugefügt
- Docker Deployment Konfiguration für Fly.io
- Social Media Sharing Funktionalität für Quiz-Ergebnisse
  - Twitter Integration
  - Facebook Integration
  - WhatsApp Integration
  - LinkedIn Integration

## [1.1.0] - 2025-01-04

### Hinzugefügt
- 20 neue Quizfragen zu Teamhelden Kategorie
- 20 neue Quizfragen zu Kreativ-Ecke Kategorie
- Erweitert auf insgesamt 60 Fragen (20 pro Kategorie für 3 Kategorien)

### Geändert
- Fragen Pool von 10 auf 20 Fragen pro Kategorie erhöht

## [1.0.0] - 2025-01-03

### Hinzugefügt
- Initiales Release des T-Fox Techero-Quiz
- Vier Quiz-Kategorien:
  - 🦊 Teamhelden
  - 🎨 Kreativ-Ecke
  - 🌍 Weltentdecker
  - 🛡️ Gemeinsam stark
- T-Fox Charakter mit verschiedenen Emotionen:
  - Normal
  - Glücklich
  - Nachdenklich
  - Traurig
- Interaktive Sprechblase für T-Fox Feedback
- Fortschrittsanzeige während des Quiz
- Farbliche Markierung von richtigen/falschen Antworten
- Belohnungssystem mit Abzeichen:
  - Gold (≥80%)
  - Silber (≥60%)
  - Bronze (≥40%)
  - Versuch es nochmal (<40%)
- Responsive Design für Mobile und Desktop
- Animationen für Antwort-Feedback
- Zufällige Fragenauswahl aus Pool
- Erklärungen zu jeder Antwort

### Technisches
- Vanilla JavaScript (kein Framework)
- CSS3 mit Custom Properties
- HTML5 Struktur
- SVG-basierte Grafiken (eingebettet als Data URIs)
- Nunito Google Font

## Version History Format

### [Version] - Datum

#### Hinzugefügt (Added)
Für neue Features.

#### Geändert (Changed)
Für Änderungen an bestehenden Funktionalitäten.

#### Veraltet (Deprecated)
Für bald zu entfernende Features.

#### Entfernt (Removed)
Für nun entfernte Features.

#### Behoben (Fixed)
Für Bugfixes.

#### Sicherheit (Security)
Im Falle von Sicherheitslücken.
