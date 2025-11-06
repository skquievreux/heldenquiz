// Vercel Serverless Function für KI-gestützte Fragengenerierung
// Verwendet Anthropic Claude API

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const fetch = require('node-fetch').default || require('node-fetch');
const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const CLAUDE_MODEL = 'claude-3-5-sonnet-20241022';

// Kategorie-Beschreibungen für besseren Kontext
const categoryDescriptions = {
    teamhelden: 'Fragen zu Teamarbeit, Zusammenhalt, Freundschaft und wie man als Team zusammenarbeitet',
    kreativ: 'Rätsel und Fragen zu Kunst, Kreativität, Problemlösung und kreativem Denken',
    weltentdecker: 'Fragen zu verschiedenen Ländern, Kulturen, Technologien und der Welt um uns herum',
    gemeinsam: 'Fragen zu Inklusion, Vielfalt, Respekt und wie man füreinander da sein kann'
};

// Schwierigkeitsgrad-Beschreibungen
const difficultyLevels = {
    leicht: '6-8 Jahre alt, einfache Sprache, kurze Sätze, grundlegende Konzepte',
    mittel: '8-10 Jahre alt, altersgerechte Sprache, etwas komplexere Konzepte',
    schwer: '10-12 Jahre alt, fortgeschrittene Konzepte, erfordert mehr Nachdenken'
};

module.exports = async function handler(req, res) {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Nur POST erlauben
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // API-Key prüfen
    if (!ANTHROPIC_API_KEY) {
        console.error('ANTHROPIC_API_KEY ist nicht gesetzt');
        return res.status(500).json({
            error: 'Server-Konfigurationsfehler: API-Key nicht gefunden',
            details: 'Bitte ANTHROPIC_API_KEY in den Vercel Environment Variables setzen'
        });
    }

    try {
        const { category, topic, count, difficulty } = req.body;

        // Validierung
        if (!category || !topic || !count) {
            return res.status(400).json({
                error: 'Fehlende Parameter: category, topic und count sind erforderlich'
            });
        }

        // Prompt für Claude erstellen
        const prompt = createPrompt(category, topic, count, difficulty);

        // Claude API aufrufen
        const response = await fetch(ANTHROPIC_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: CLAUDE_MODEL,
                max_tokens: 4096,
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ]
            })
        });
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: CLAUDE_MODEL,
                max_tokens: 4096,
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Claude API Error:', errorData);
            throw new Error(`Claude API Fehler: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Antwort von Claude parsen
        const content = data.content[0].text;
        const questions = parseQuestions(content);

        // Validierung der generierten Fragen
        if (!questions || questions.length === 0) {
            throw new Error('Keine Fragen generiert');
        }

        // Erfolgreiche Antwort
        return res.status(200).json({
            success: true,
            questions: questions,
            count: questions.length
        });

    } catch (error) {
        console.error('Error generating questions:', error);
        return res.status(500).json({
            error: 'Fehler beim Generieren der Fragen',
            details: error.message
        });
    }
}

// Prompt für Claude erstellen
function createPrompt(category, topic, count, difficulty) {
    const categoryDesc = categoryDescriptions[category] || category;
    const difficultyDesc = difficultyLevels[difficulty] || difficultyLevels.mittel;

    return `Du bist ein Experte für die Erstellung von kindgerechten Quiz-Fragen für das T-Fox Techero-Quiz.

KONTEXT:
- Kategorie: ${categoryDesc}
- Thema: ${topic}
- Anzahl: ${count} Fragen
- Zielgruppe: Kinder (${difficultyDesc})
- Charakter: T-Fox, ein freundlicher Fuchs, der Kinder beim Lernen unterstützt

ANFORDERUNGEN:
1. Erstelle genau ${count} Multiple-Choice-Fragen zum gegebenen Thema
2. Jede Frage hat genau 4 Antwortmöglichkeiten
3. Die Fragen sollen altersgerecht, lehrreich und motivierend sein
4. Verwende eine freundliche, positive Sprache
5. Füge zu jeder Frage eine kurze, verständliche Erklärung hinzu
6. Die Erklärungen sollen im Ton von T-Fox sein (freundlich, ermutigend)

FORMAT:
Gib die Fragen als valides JSON-Array zurück. Jede Frage hat diese Struktur:

[
    {
        "question": "Die Frage hier",
        "answers": [
            "Antwort 1",
            "Antwort 2",
            "Antwort 3",
            "Antwort 4"
        ],
        "correctAnswer": 0,
        "explanation": "Erklärung von T-Fox zur richtigen Antwort"
    }
]

WICHTIG:
- correctAnswer ist der Index (0-3) der richtigen Antwort im answers Array
- Gib NUR das JSON-Array zurück, keine zusätzlichen Texte
- Die Erklärungen sollten beginnen mit etwas wie "Genau! ..." oder "Richtig! ..." oder ähnlich motivierend

Generiere jetzt die Fragen:`;
}

// Fragen aus Claude-Antwort parsen
function parseQuestions(content) {
    try {
        // Versuche JSON zu finden (mit oder ohne Markdown Code-Blöcke)
        let jsonStr = content;

        // Entferne Markdown Code-Blöcke wenn vorhanden
        const codeBlockMatch = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
        if (codeBlockMatch) {
            jsonStr = codeBlockMatch[1];
        }

        // Parse JSON
        const questions = JSON.parse(jsonStr.trim());

        // Validiere jede Frage
        return questions.map(q => {
            if (!q.question || !Array.isArray(q.answers) || q.answers.length !== 4 ||
                typeof q.correctAnswer !== 'number' || !q.explanation) {
                throw new Error('Ungültiges Fragen-Format');
            }

            return {
                question: q.question.trim(),
                answers: q.answers.map(a => a.trim()),
                correctAnswer: q.correctAnswer,
                explanation: q.explanation.trim()
            };
        });

    } catch (error) {
        console.error('Error parsing questions:', error);
        console.error('Content:', content);
        throw new Error('Fehler beim Parsen der generierten Fragen: ' + error.message);
    }
}
