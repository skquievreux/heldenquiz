# T-Fox' Techero-Quiz

Ein interaktives, lehrreiches Quiz für Kinder mit T-Fox als Moderator.

🌐 **Live-Demo**: [heldenquiz.vercel.app](https://heldenquiz.vercel.app)

## Über das Projekt

T-Fox' Techero-Quiz ist eine moderne, interaktive Webanwendung, die Kindern spielerisch Wissen zu verschiedenen Themen vermittelt. T-Fox, der Anführer der Techeroes, führt durch das Quiz und motiviert die Kinder mit seinen positiven Reaktionen.

### Hauptmerkmale

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

## Technische Details

Das Quiz wurde mit folgenden Technologien entwickelt:

- **HTML5**: Für die Struktur der Webseite
- **CSS3**: Für das moderne Design und die Animationen
- **Vanilla JavaScript**: Für die Interaktivität und Quiz-Logik
- **Vercel**: Für das Hosting und Deployment
- **Anthropic Claude API**: Für die KI-gestützte Fragengenerierung im Admin-Bereich

Die Anwendung benötigt keine Installation und kann direkt im Browser geöffnet werden.

## Verwendung

1. Öffne die Datei `index.html` in einem modernen Webbrowser
2. Wähle eine der vier Kategorien aus
3. Beantworte die Fragen, indem du auf die entsprechende Antwort klickst
4. Nach jeder Antwort erhältst du eine Erklärung von T-Fox
5. Am Ende des Quiz erhältst du ein Abzeichen basierend auf deiner Leistung

## Anpassung der Fragen

Alle Fragen sind in der Datei `questions.js` gespeichert und können leicht angepasst werden:

1. Öffne die Datei `questions.js` in einem Texteditor
2. Jede Kategorie enthält ein Array von Fragen-Objekten
3. Jedes Fragen-Objekt hat folgende Struktur:
   ```javascript
   {
       question: "Die Frage",
       answers: [
           "Antwort 1",
           "Antwort 2",
           "Antwort 3",
           "Antwort 4"
       ],
       correctAnswer: 2, // Index der richtigen Antwort (beginnend bei 0)
       explanation: "Erklärung zur richtigen Antwort"
   }
   ```
4. Du kannst bestehende Fragen ändern oder neue hinzufügen
5. Speichere die Datei und aktualisiere den Browser, um die Änderungen zu sehen

## Anpassung der Quiz-Einstellungen

Die Anzahl der Fragen pro Quiz kann in der Datei `script.js` angepasst werden:

1. Öffne die Datei `script.js` in einem Texteditor
2. Ändere den Wert der Konstante `QUESTIONS_PER_QUIZ` (standardmäßig auf 5 gesetzt)
3. Speichere die Datei und aktualisiere den Browser, um die Änderungen zu sehen

## Über T-Fox

T-Fox ist der Anführer der Techeroes und spielt eine zentrale Rolle als Mentor und Team-Builder. Seine wichtigsten Eigenschaften sind:

- **Teamgeist & Führung**: T-Fox sorgt für den Zusammenhalt des Teams und inspiriert andere mit seiner positiven Art.
- **Kreativität & Problemlösung**: Er hilft Kindern, kreative Lösungen zu entwickeln und fördert ihr kritisches Denken.
- **Weltoffen & Abenteurer**: Er liebt Sport, Musik, Tanzen und Reisen, wodurch er ein breites Wissen über Kulturen und Technologien besitzt.
- **Beschützer von TechVille**: Sein Motto ist "Leave no one behind." Er setzt sich für Inklusion und Chancengleichheit ein.

## Dateien im Projekt

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

Dieses Projekt ist für Bildungszwecke erstellt worden und darf frei verwendet werden.