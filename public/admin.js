// Admin Interface für T-Fox Techero-Quiz
// KI-gestützte Fragengenerierung

// DOM-Elemente
const categorySelect = document.getElementById('category');
const topicInput = document.getElementById('topic');
const countInput = document.getElementById('count');
const difficultySelect = document.getElementById('difficulty');
const generateBtn = document.getElementById('generate-btn');
const loadingDiv = document.getElementById('loading');
const errorMessageDiv = document.getElementById('error-message');
const previewSection = document.getElementById('preview-section');
const questionsPreview = document.getElementById('questions-preview');
const exportJsonBtn = document.getElementById('export-json-btn');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const exportCodeDiv = document.getElementById('export-code');
const codeOutput = document.getElementById('code-output');
const copyCodeBtn = document.getElementById('copy-code-btn');

// Zustand
let generatedQuestions = [];

// Event Listener
generateBtn.addEventListener('click', generateQuestions);
exportJsonBtn.addEventListener('click', exportAsJson);
copyBtn.addEventListener('click', showCode);
copyCodeBtn.addEventListener('click', copyCode);
clearBtn.addEventListener('click', clearQuestions);

// Hauptfunktion: Fragen generieren
async function generateQuestions() {
    const category = categorySelect.value;
    const topic = topicInput.value.trim();
    const count = parseInt(countInput.value);
    const difficulty = difficultySelect.value;

    // Validierung
    if (!category) {
        showError('Bitte wähle eine Kategorie aus.');
        return;
    }

    if (!topic) {
        showError('Bitte gib ein Thema ein.');
        return;
    }

    if (count < 1 || count > 20) {
        showError('Die Anzahl muss zwischen 1 und 20 liegen.');
        return;
    }

    // UI aktualisieren
    generateBtn.disabled = true;
    loadingDiv.classList.remove('hidden');
    errorMessageDiv.classList.add('hidden');
    previewSection.classList.add('hidden');

    try {
        // API-Anfrage an Vercel Serverless Function
        const response = await fetch('/api/generate-questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                category,
                topic,
                count,
                difficulty
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Fehler beim Generieren der Fragen');
        }

        const data = await response.json();
        generatedQuestions = data.questions;

        // Fragen anzeigen
        displayQuestions(generatedQuestions);
        previewSection.classList.remove('hidden');

        // Scroll zur Vorschau
        previewSection.scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        console.error('Error:', error);
        showError('Fehler beim Generieren der Fragen: ' + error.message);
    } finally {
        generateBtn.disabled = false;
        loadingDiv.classList.add('hidden');
    }
}

// Fragen anzeigen
function displayQuestions(questions) {
    questionsPreview.innerHTML = '';

    questions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.innerHTML = `
            <div class="question-number">Frage ${index + 1}</div>
            <div class="question-text" contenteditable="true" data-index="${index}" data-field="question">${escapeHtml(q.question)}</div>
            <ul class="answers-list">
                ${q.answers.map((answer, answerIndex) => `
                    <li class="answer-item ${answerIndex === q.correctAnswer ? 'correct' : ''}"
                        contenteditable="true"
                        data-index="${index}"
                        data-answer-index="${answerIndex}"
                        data-field="answer">${escapeHtml(answer)}</li>
                `).join('')}
            </ul>
            <div class="explanation">
                <strong>Erklärung:</strong>
                <div contenteditable="true" data-index="${index}" data-field="explanation">${escapeHtml(q.explanation)}</div>
            </div>
        `;
        questionsPreview.appendChild(card);
    });

    // Event Listener für Bearbeitung hinzufügen
    addEditListeners();
}

// Edit-Listener hinzufügen
function addEditListeners() {
    // Fragen bearbeiten
    document.querySelectorAll('[data-field="question"]').forEach(el => {
        el.addEventListener('blur', function() {
            const index = parseInt(this.dataset.index);
            generatedQuestions[index].question = this.textContent.trim();
        });
    });

    // Antworten bearbeiten
    document.querySelectorAll('[data-field="answer"]').forEach(el => {
        el.addEventListener('blur', function() {
            const qIndex = parseInt(this.dataset.index);
            const aIndex = parseInt(this.dataset.answerIndex);
            generatedQuestions[qIndex].answers[aIndex] = this.textContent.trim();
        });

        // Richtige Antwort ändern (Klick auf Antwort)
        el.addEventListener('click', function(e) {
            if (e.ctrlKey || e.metaKey) {
                const qIndex = parseInt(this.dataset.index);
                const aIndex = parseInt(this.dataset.answerIndex);

                // Alle Antworten der Frage finden
                const allAnswers = this.parentElement.querySelectorAll('.answer-item');
                allAnswers.forEach(a => a.classList.remove('correct'));

                // Diese Antwort als korrekt markieren
                this.classList.add('correct');
                generatedQuestions[qIndex].correctAnswer = aIndex;
            }
        });
    });

    // Erklärungen bearbeiten
    document.querySelectorAll('[data-field="explanation"]').forEach(el => {
        el.addEventListener('blur', function() {
            const index = parseInt(this.dataset.index);
            generatedQuestions[index].explanation = this.textContent.trim();
        });
    });
}

// Als JSON exportieren
function exportAsJson() {
    const dataStr = JSON.stringify(generatedQuestions, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `quiz-questions-${categorySelect.value}-${Date.now()}.json`;
    link.click();

    URL.revokeObjectURL(url);

    showSuccess('Fragen als JSON exportiert!');
}

// Code anzeigen
function showCode() {
    const category = categorySelect.value;
    const categoryName = getCategoryName(category);

    const code = `// ${categoryName} - Neue Fragen
// Generiert am: ${new Date().toLocaleString('de-DE')}

const new${capitalize(category)}Questions = ${JSON.stringify(generatedQuestions, null, 4)};

// Diese Fragen zum bestehenden Array hinzufügen:
// quizQuestions.${category}.push(...new${capitalize(category)}Questions);`;

    codeOutput.textContent = code;
    exportCodeDiv.classList.remove('hidden');
    exportCodeDiv.scrollIntoView({ behavior: 'smooth' });
}

// Code kopieren
async function copyCode() {
    const code = codeOutput.textContent;

    try {
        await navigator.clipboard.writeText(code);
        showSuccess('Code in die Zwischenablage kopiert!');
        copyCodeBtn.textContent = '✓ Kopiert!';
        setTimeout(() => {
            copyCodeBtn.textContent = 'Kopieren';
        }, 2000);
    } catch (err) {
        showError('Fehler beim Kopieren: ' + err.message);
    }
}

// Fragen verwerfen
function clearQuestions() {
    if (generatedQuestions.length === 0 || confirm('Möchtest du die generierten Fragen wirklich verwerfen?')) {
        generatedQuestions = [];
        questionsPreview.innerHTML = '';
        previewSection.classList.add('hidden');
        exportCodeDiv.classList.add('hidden');
    }
}

// Fehler anzeigen
function showError(message) {
    errorMessageDiv.textContent = message;
    errorMessageDiv.classList.remove('hidden');
    setTimeout(() => {
        errorMessageDiv.classList.add('hidden');
    }, 5000);
}

// Erfolg anzeigen
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-notification';
    successDiv.textContent = message;

    const firstSection = document.querySelector('section');
    firstSection.insertAdjacentElement('afterend', successDiv);

    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Hilfsfunktionen
function getCategoryName(category) {
    const names = {
        teamhelden: 'Teamhelden',
        kreativ: 'Kreativ-Ecke',
        weltentdecker: 'Weltentdecker',
        gemeinsam: 'Gemeinsam stark'
    };
    return names[category] || category;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialisierung
window.addEventListener('DOMContentLoaded', () => {
    console.log('Admin Interface geladen');

    // Tooltips für Bearbeitung
    const tooltip = document.createElement('div');
    tooltip.style.cssText = 'position:fixed;top:10px;right:10px;background:#333;color:#fff;padding:10px 15px;border-radius:8px;font-size:0.9rem;z-index:1000;';
    tooltip.innerHTML = `
        💡 <strong>Tipps:</strong><br>
        • Klicke auf Text um ihn zu bearbeiten<br>
        • Strg/Cmd + Klick auf eine Antwort um sie als korrekt zu markieren
    `;

    // Tooltip nur anzeigen wenn Fragen sichtbar sind
    const observer = new MutationObserver(() => {
        if (!previewSection.classList.contains('hidden')) {
            if (!document.body.contains(tooltip)) {
                document.body.appendChild(tooltip);
            }
        } else {
            if (document.body.contains(tooltip)) {
                tooltip.remove();
            }
        }
    });

    observer.observe(previewSection, { attributes: true, attributeFilter: ['class'] });
});
