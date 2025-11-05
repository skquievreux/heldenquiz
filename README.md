# 🦊 T-Fox' Techero-Quiz

Ein interaktives, pädagogisches Quiz für Kinder mit dem sympathischen T-Fox als Begleiter.

🌐 **Live-Demo**: [heldenquiz.vercel.app](https://heldenquiz.vercel.app)

## Über das Projekt
![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)

## 📋 Inhaltsverzeichnis

- [Über das Projekt](#über-das-projekt)
- [Features](#features)
- [Installation](#installation)
- [Verwendung](#verwendung)
- [Projektstruktur](#projektstruktur)
- [Entwicklung](#entwicklung)
- [Konfiguration](#konfiguration)
- [Deployment](#deployment)
- [Beitragen](#beitragen)
- [Lizenz](#lizenz)

- **Modernes, kindgerechtes Design**: Freundliche Farbgebung, abgerundete Ecken und responsive Gestaltung
- **T-Fox als Quizmaster**: Animierter Charakter mit verschiedenen Emotionen und motivierenden Nachrichten
- **Vier thematische Kategorien**:
  - 🦊 **Teamhelden**: Fragen zu Teamarbeit, Zusammenhalt und Freundschaft
  - 🎨 **Kreativ-Ecke**: Rätsel und Fragen zu Kunst, Kreativität und Problemlösung
  - 🌍 **Weltentdecker**: Fragen zu verschiedenen Ländern, Kulturen und Technologien
  - 🛡️ **Gemeinsam stark**: Fragen zu Inklusion, Vielfalt und wie man füreinander da sein kann
- **Interaktives Quiz-System**: Fortschrittsanzeige, farbliche Markierung von Antworten, Erklärungen und Belohnungssystem
- **Zufällige Fragenauswahl**: Bei jedem Start werden zufällig Fragen aus dem Pool von 60 Fragen ausgewählt
- **Social Media Sharing**: Teile deine Quiz-Ergebnisse auf Twitter, Facebook, WhatsApp und LinkedIn
- **Admin-Interface**: KI-gestützte Fragenerstellung für neue Quiz-Inhalte
## 🎯 Über das Projekt

Das T-Fox Techero-Quiz ist ein interaktives Lernspiel für Kinder, das Wissen in vier verschiedenen Kategorien vermittelt:

- 🦊 **Teamhelden**: Teamarbeit, Zusammenhalt und Freundschaft
- 🎨 **Kreativ-Ecke**: Kunst, Kreativität und Problemlösung
- 🌍 **Weltentdecker**: Länder, Kulturen und Technologien
- 🛡️ **Gemeinsam stark**: Inklusion, Vielfalt und Zusammenhalt

- **HTML5**: Für die Struktur der Webseite
- **CSS3**: Für das moderne Design und die Animationen
- **Vanilla JavaScript**: Für die Interaktivität und Quiz-Logik
- **Vercel**: Für das Hosting und Deployment
- **Anthropic Claude API**: Für die KI-gestützte Fragengenerierung im Admin-Bereich
### Über T-Fox

T-Fox ist der Anführer der Techeroes und spielt eine zentrale Rolle als Mentor und Team-Builder. Seine wichtigsten Eigenschaften sind:

- **Teamgeist & Führung**: T-Fox sorgt für den Zusammenhalt des Teams und inspiriert andere mit seiner positiven Art.
- **Kreativität & Problemlösung**: Er hilft Kindern, kreative Lösungen zu entwickeln und fördert ihr kritisches Denken.
- **Weltoffen & Abenteurer**: Er liebt Sport, Musik, Tanzen und Reisen, wodurch er ein breites Wissen über Kulturen und Technologien besitzt.
- **Beschützer von TechVille**: Sein Motto ist "Leave no one behind." Er setzt sich für Inklusion und Chancengleichheit ein.

## ✨ Features

### Version 1.1.0 (Neu!)

- **Modulare Architektur**: Saubere Trennung von Logik, UI und Daten
- **Dynamisches Frage-Management**: Fragen werden aus JSON-Dateien geladen
- **Externe Konfiguration**: Alle Einstellungen in config.json
- **Build-System**: Moderne Entwicklung mit Vite
- **Versioniertes Management**: Professionelles Changelog und Versionierung

### Allgemeine Features

- **Interaktiver Charakter**: T-Fox reagiert auf Antworten und gibt Feedback
- **Fortschrittsverfolgung**: Lokale Speicherung der Quiz-Statistiken
- **Responsive Design**: Funktioniert auf Desktop, Tablet und Smartphone
- **Social Sharing**: Teile deine Ergebnisse auf Social Media
- **Erweiterbar**: Einfaches Hinzufügen neuer Kategorien und Fragen
- **142+ Fragen**: Umfangreicher Fragen-Pool über 4 Kategorien

## 🚀 Installation

### Voraussetzungen

- Node.js >= 18.0.0
- npm oder yarn

### Schritt-für-Schritt Installation

```bash
# Repository klonen
git clone https://github.com/skquievreux/heldenquiz.git
cd heldenquiz

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Anwendung ist nun unter `http://localhost:8080` erreichbar.

## 📖 Verwendung

### Entwicklungsmodus

```bash
npm run dev
```

Startet den Vite-Entwicklungsserver mit Hot Module Replacement.

### Produktions-Build

```bash
npm run build
```

Erstellt eine optimierte Produktionsversion im `dist/` Verzeichnis.

### Vorschau der Produktionsversion

```bash
npm run preview
```

Startet einen lokalen Server für die gebaute Version.

## 📁 Projektstruktur

```
heldenquiz/
├── src/
│   ├── modules/           # JavaScript-Module
│   │   ├── QuestionLoader.js   # Lädt Fragen aus JSON
│   │   ├── QuizState.js        # State Management
│   │   ├── FoxController.js    # T-Fox Steuerung
│   │   └── QuizRenderer.js     # UI Rendering
│   ├── app.js             # Hauptanwendung
│   └── config.json        # Konfiguration
├── data/
│   └── questions/         # Fragen-Datenbank (JSON)
│       ├── teamhelden.json     # 37 Fragen
│       ├── kreativ.json        # 37 Fragen
│       ├── weltentdecker.json  # 34 Fragen
│       └── gemeinsam.json      # 34 Fragen
├── public/                # Öffentliche Assets
├── styles.css             # Hauptstyles
├── index.html             # Einstiegspunkt
├── vite.config.js         # Vite-Konfiguration
├── package.json           # Projekt-Metadaten
├── README.md              # Diese Datei
├── CHANGELOG.md           # Versionshistorie
└── CONTRIBUTING.md        # Beitragsrichtlinien
```

## 🛠️ Entwicklung

### Neue Fragen hinzufügen

Bearbeite die entsprechende JSON-Datei in `data/questions/`:

```json
{
  "question": "Deine Frage hier?",
  "answers": [
    "Antwort 1",
    "Antwort 2",
    "Antwort 3",
    "Antwort 4"
  ],
  "correctAnswer": 0,
  "explanation": "Erklärung zur richtigen Antwort"
}
```

### Neue Kategorie hinzufügen

1. Erstelle eine neue JSON-Datei in `data/questions/`:

```json
{
  "category": "neue-kategorie",
  "displayName": "Neue Kategorie",
  "icon": "🎯",
  "questions": [...]
}
```

2. Aktualisiere `src/config.json`:

```json
{
  "categories": [
    ...
    {
      "id": "neue-kategorie",
      "displayName": "Neue Kategorie",
      "icon": "🎯",
      "description": "Beschreibung"
    }
  ]
}
```

3. Aktualisiere den QuestionLoader in `src/modules/QuestionLoader.js`

### Konfiguration anpassen

Bearbeite `src/config.json`:

```json
{
  "questionsPerQuiz": 5,
  "badgeThresholds": {
    "gold": 80,
    "silver": 60,
    "bronze": 40
  },
  "foxReactions": {
    "greeting": "Deine Begrüßung",
    "correct": ["Reaktion 1", "Reaktion 2"],
    "incorrect": ["Reaktion 1", "Reaktion 2"]
  }
}
```

## ⚙️ Konfiguration

### Environment Variables

Erstelle eine `.env` Datei im Projektroot:

```env
VITE_API_URL=https://your-api.com
VITE_ANALYTICS_ID=your-analytics-id
```

### Build-Konfiguration

Passe `vite.config.js` an für erweiterte Build-Optionen.

## 🚢 Deployment

### Fly.io (empfohlen)

```bash
fly deploy
```

Die Konfiguration ist bereits in `fly.toml` vorhanden.

### Statisches Hosting

```bash
npm run build
```

Deploye den Inhalt des `dist/` Verzeichnisses auf:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- Cloudflare Pages

## 🤝 Beitragen

Beiträge sind willkommen! Siehe [CONTRIBUTING.md](CONTRIBUTING.md) für Details.

### Schnellstart

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📝 Changelog

Siehe [CHANGELOG.md](CHANGELOG.md) für eine vollständige Versionshistorie.

### Version 1.1.0 - Modulare Architektur

- ✨ Modulare JavaScript-Architektur eingeführt
- 📦 Fragen in separate JSON-Dateien externalisiert
- ⚙️ Konfiguration in config.json ausgelagert
- 🏗️ Vite Build-System integriert
- 📚 Professionelle Dokumentation hinzugefügt
- 🔄 State Management mit QuizState Modul
- 🎨 UI Rendering mit QuizRenderer Modul
- 🦊 Fox-Steuerung mit FoxController Modul
- 📂 Verbesserte Projektstruktur

### Version 1.0.0 - Initial Release

- 🎉 Initiales Release mit 4 Kategorien
- 🦊 T-Fox als Quiz-Moderator
- 📱 Responsive Design
- 🎯 Social Media Sharing
- 🏆 Abzeichen-System

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Siehe [LICENSE](LICENSE) für Details.

## 👥 Team

Entwickelt vom T-Fox Team

## 🙏 Danksagungen

- Inspiration: Techeroes-Programm
- Charakter-Design: T-Fox
- Zielgruppe: Kinder und Familien

## 📞 Support

### Hauptdateien
- `index.html`: Die Hauptdatei mit der HTML-Struktur
- `styles.css`: Das Stylesheet für das Design
- `questions.js`: Die konfigurierbaren Fragen (60 Fragen in 4 Kategorien)
- `script.js`: Die Hauptlogik des Quiz

### Admin-Bereich
- `admin.html`: Admin-Interface für die KI-gestützte Fragengenerierung
- `admin.css`: Stylesheet für das Admin-Interface
- `admin.js`: Logik für die Fragengenerierung und -verwaltung

### API
- `api/generate-questions.js`: Vercel Serverless Function für die KI-Integration

## Deployment auf Vercel

Das Projekt ist auf Vercel deployed und nutzt Vercel Serverless Functions für die API-Integration.

### Erstmaliges Deployment

1. Forke dieses Repository oder clone es
2. Verbinde es mit deinem Vercel-Account
3. Füge die erforderlichen Environment Variables in den Vercel-Einstellungen hinzu:
   ```
   ANTHROPIC_API_KEY=dein-api-key
   ```
4. Deploye das Projekt

### Environment Variables

Für die KI-gestützte Fragengenerierung im Admin-Bereich benötigst du:

- `ANTHROPIC_API_KEY`: Dein API-Key von Anthropic Claude

Diese Variable muss in den Vercel-Projekteinstellungen unter "Settings" → "Environment Variables" hinterlegt werden.

### Lokale Entwicklung

Für die lokale Entwicklung mit Vercel CLI:

```bash
# Vercel CLI installieren (falls nicht vorhanden)
npm install -g vercel

# Projekt mit Vercel verlinken
vercel link

# Environment Variables lokal herunterladen
vercel env pull

# Lokalen Dev-Server starten
vercel dev
```

Alternativ ohne Vercel CLI:

```bash
# Einfachen HTTP-Server starten
npm start
```

**Hinweis**: Die Admin-Funktionen (API-Integration) funktionieren nur mit Vercel CLI oder im Deployment, da sie Vercel Serverless Functions nutzen.

## Admin-Bereich

Der Admin-Bereich (`admin.html`) ermöglicht es, neue Fragen automatisch mit KI zu generieren:

1. Öffne `/admin.html` im Browser
2. Wähle eine Kategorie
3. Gib ein Thema oder eine Beschreibung ein
4. Die KI generiert automatisch neue Fragen im richtigen Format
5. Überprüfe und bearbeite die Fragen
6. Exportiere sie als JSON oder kopiere sie direkt in `questions.js`

**Zugriff**: Der Admin-Bereich ist aktuell nicht passwortgeschützt. Für Produktionsumgebungen sollte ein Authentifizierungsmechanismus implementiert werden.

## Lizenz
Bei Fragen oder Problemen:
- Öffne ein [Issue](https://github.com/skquievreux/heldenquiz/issues)
- Kontaktiere das Team

---

Made with ❤️ by the T-Fox Team
