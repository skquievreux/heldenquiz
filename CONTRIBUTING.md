# Beitragsrichtlinien

Vielen Dank für dein Interesse, zum T-Fox Techero-Quiz beizutragen! 🦊

## 📋 Inhaltsverzeichnis

- [Code of Conduct](#code-of-conduct)
- [Wie kann ich beitragen?](#wie-kann-ich-beitragen)
- [Entwicklungs-Setup](#entwicklungs-setup)
- [Projektstruktur](#projektstruktur)
- [Coding-Standards](#coding-standards)
- [Pull Request-Prozess](#pull-request-prozess)
- [Issue-Richtlinien](#issue-richtlinien)

## Code of Conduct

Dieses Projekt richtet sich an Kinder und Familien. Wir erwarten von allen Mitwirkenden:
- Respektvoller und inklusiver Umgang
- Kindgerechte Sprache und Inhalte
- Konstruktives Feedback
- Fokus auf pädagogischen Wert

## Wie kann ich beitragen?

### 🐛 Bugs melden

Wenn du einen Bug gefunden hast:
1. Prüfe, ob das Problem bereits als Issue existiert
2. Erstelle ein neues Issue mit dem "Bug"-Label
3. Beschreibe das Problem detailliert:
   - Schritte zur Reproduktion
   - Erwartetes Verhalten
   - Tatsächliches Verhalten
   - Screenshots (falls relevant)
   - Browser/Umgebung

### 💡 Features vorschlagen

Neue Feature-Ideen sind willkommen:
1. Erstelle ein Issue mit dem "Enhancement"-Label
2. Beschreibe:
   - Das Problem, das gelöst werden soll
   - Deine Lösungsidee
   - Alternativen, die du erwogen hast
   - Zusätzlicher Kontext

### ✍️ Fragen hinzufügen oder verbessern

Fragen sind das Herzstück des Quiz:
1. Prüfe die bestehenden Fragen in `data/questions/`
2. Achte auf:
   - Altersgerechte Formulierung (8-12 Jahre)
   - Klare, eindeutige Antworten
   - Lehrreiche Erklärungen
   - Korrekte Fakten
   - Positive, motivierende Sprache

### 🎨 Design-Verbesserungen

Für UI/UX-Verbesserungen:
1. Behalte das kindgerechte Design bei
2. Teste auf verschiedenen Geräten
3. Achte auf Accessibility (Barrierefreiheit)
4. Dokumentiere Design-Entscheidungen

### 📝 Dokumentation verbessern

Dokumentation ist wichtig:
- README.md aktualisieren
- Code-Kommentare hinzufügen
- Beispiele bereitstellen
- Tutorials erstellen

## Entwicklungs-Setup

### Voraussetzungen

- Node.js >= 18.0.0
- npm oder yarn
- Git
- Moderner Browser (Chrome, Firefox, Safari, Edge)

### Setup

```bash
# Repository forken und klonen
git clone https://github.com/DEIN-USERNAME/heldenquiz.git
cd heldenquiz

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# In einem neuen Terminal: Tests ausführen (wenn vorhanden)
npm test
```

### Branch-Strategie

- `main`: Stabile Produktionsversion
- `develop`: Entwicklungsbranch (wenn vorhanden)
- `feature/*`: Feature-Branches
- `fix/*`: Bugfix-Branches
- `docs/*`: Dokumentations-Branches

## Projektstruktur

```
heldenquiz/
├── src/
│   ├── modules/          # Wiederverwendbare Module
│   ├── app.js            # Hauptanwendung
│   └── config.json       # Konfiguration
├── data/
│   └── questions/        # Fragen (JSON)
├── styles.css            # Globale Styles
├── index.html            # Einstiegspunkt
└── tests/                # Tests (zukünftig)
```

### Wichtige Module

- **QuestionLoader**: Lädt Fragen aus JSON
- **QuizState**: State Management
- **FoxController**: T-Fox Steuerung
- **QuizRenderer**: UI Rendering

## Coding-Standards

### JavaScript

```javascript
// Verwende ES6+ Features
const myFunction = (param) => {
  // Klare Variablennamen
  const result = processData(param);
  return result;
};

// JSDoc-Kommentare für Funktionen
/**
 * Beschreibung der Funktion
 * @param {string} param - Parameter-Beschreibung
 * @returns {Object} Rückgabe-Beschreibung
 */
function myFunction(param) {
  // Implementierung
}
```

### Code-Style

- **Einrückung**: 2 Leerzeichen
- **Quotes**: Single Quotes für Strings
- **Semicolons**: Verwenden
- **Naming**:
  - `camelCase` für Variablen und Funktionen
  - `PascalCase` für Klassen
  - `UPPER_CASE` für Konstanten

### Commit-Messages

Folge dem [Conventional Commits](https://www.conventionalcommits.org/de/) Format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: Neues Feature
- `fix`: Bugfix
- `docs`: Dokumentation
- `style`: Code-Formatierung
- `refactor`: Code-Refactoring
- `test`: Tests
- `chore`: Build-Prozess, Dependencies

**Beispiele:**
```
feat(questions): Add 10 new questions to Teamhelden category

- Added questions about conflict resolution
- Improved explanations for existing questions
- Updated category metadata

Closes #123
```

```
fix(renderer): Fix progress bar not updating correctly

The progress bar was not updating after answering questions.
This fixes the issue by calling updateProgress after each answer.

Fixes #456
```

### Fragen-Format

```json
{
  "question": "Klare, verständliche Frage?",
  "answers": [
    "Erste Antwortmöglichkeit",
    "Zweite Antwortmöglichkeit",
    "Dritte Antwortmöglichkeit",
    "Vierte Antwortmöglichkeit"
  ],
  "correctAnswer": 1,
  "explanation": "Lehrreiche Erklärung, die das 'Warum' erklärt."
}
```

**Richtlinien für Fragen:**
- ✅ Altersgerecht (8-12 Jahre)
- ✅ Eindeutig formuliert
- ✅ Nur eine richtige Antwort
- ✅ Positive Sprache
- ✅ Lehrreiche Erklärung
- ❌ Keine Tricks oder Fangfragen
- ❌ Keine zu schwierigen Begriffe
- ❌ Keine negativen oder beängstigenden Inhalte

## Pull Request-Prozess

### Vor dem PR

1. **Aktualisiere deinen Branch**
   ```bash
   git checkout main
   git pull upstream main
   git checkout dein-branch
   git rebase main
   ```

2. **Teste deine Änderungen**
   ```bash
   npm run dev
   # Manuell testen
   npm run build
   # Build testen
   ```

3. **Code-Style prüfen**
   ```bash
   npm run lint  # Falls konfiguriert
   ```

### PR erstellen

1. **Push deinen Branch**
   ```bash
   git push origin dein-branch
   ```

2. **Öffne einen PR auf GitHub**
   - Verwende eine aussagekräftige Beschreibung
   - Referenziere zugehörige Issues
   - Füge Screenshots hinzu (bei UI-Änderungen)
   - Beschreibe, was getestet wurde

### PR-Template

```markdown
## Beschreibung
Kurze Beschreibung der Änderungen

## Art der Änderung
- [ ] Bugfix
- [ ] Neues Feature
- [ ] Breaking Change
- [ ] Dokumentation

## Wie wurde getestet?
Beschreibe die Tests

## Checklist
- [ ] Code folgt den Coding-Standards
- [ ] Selbst-Review durchgeführt
- [ ] Kommentare hinzugefügt (wo nötig)
- [ ] Dokumentation aktualisiert
- [ ] Keine neuen Warnings
- [ ] Tests hinzugefügt (falls relevant)
- [ ] Alle Tests bestanden
```

### Review-Prozess

1. Mindestens ein Review erforderlich
2. Alle CI-Checks müssen grün sein
3. Keine ungelösten Kommentare
4. Maintainer merged den PR

## Issue-Richtlinien

### Issue-Template: Bug

```markdown
**Beschreibung**
Klare Beschreibung des Bugs

**Schritte zur Reproduktion**
1. Gehe zu '...'
2. Klicke auf '...'
3. Scrolle nach unten zu '...'
4. Fehler erscheint

**Erwartetes Verhalten**
Was sollte passieren

**Tatsächliches Verhalten**
Was passiert tatsächlich

**Screenshots**
Falls zutreffend

**Umgebung**
- Browser: [z.B. Chrome 90]
- OS: [z.B. Windows 10]
- Version: [z.B. 1.1.0]
```

### Issue-Template: Feature

```markdown
**Feature-Beschreibung**
Klare Beschreibung des Features

**Problem**
Welches Problem löst dieses Feature?

**Lösungsvorschlag**
Wie könnte die Lösung aussehen?

**Alternativen**
Welche Alternativen hast du erwogen?

**Zusätzlicher Kontext**
Weitere Informationen, Screenshots, etc.
```

## Fragen?

Bei Fragen kannst du:
- Ein Issue öffnen
- Die bestehende Dokumentation lesen
- Das Team kontaktieren

## Danke!

Vielen Dank für deinen Beitrag zum T-Fox Techero-Quiz! 🦊🎉

Jeder Beitrag, egal wie klein, macht das Quiz besser für Kinder und Familien.
