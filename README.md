# T-Fox' Techero-Quiz

Ein interaktives, lehrreiches Quiz für Kinder mit T-Fox als Moderator.

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

## Technische Details

Das Quiz wurde mit folgenden Technologien entwickelt:

- **HTML5**: Für die Struktur der Webseite
- **CSS3**: Für das moderne Design und die Animationen
- **JavaScript**: Für die Interaktivität und Quiz-Logik

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

- `index.html`: Die Hauptdatei mit der HTML-Struktur
- `styles.css`: Das Stylesheet für das Design
- `questions.js`: Die konfigurierbaren Fragen (60 Fragen in 4 Kategorien)
- `script.js`: Die Hauptlogik des Quiz

## Lizenz

Dieses Projekt ist für Bildungszwecke erstellt worden und darf frei verwendet werden.