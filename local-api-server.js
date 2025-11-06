import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// .env laden
dotenv.config();

// Importiere die API-Funktion dynamisch
let generateQuestionsHandler;

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Route
app.post('/api/generate-questions', async (req, res) => {
    // Stelle sicher, dass der Handler geladen ist
    if (!generateQuestionsHandler) {
        const module = await import('./api/generate-questions.js');
        generateQuestionsHandler = module.default;
    }

    // Rufe die Vercel-Funktion auf
    await generateQuestionsHandler(req, res);
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Local API server running' });
});

app.listen(PORT, () => {
    console.log(`🚀 Local API server running on http://localhost:${PORT}`);
    console.log(`📡 API endpoint: http://localhost:${PORT}/api/generate-questions`);
});