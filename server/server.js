import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();

app.use(cors());
app.use(express.json());

const apiKey = process.env.GOOGLE_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

app.post('/api/generate-ad', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(
      `Create a short advertisement and an image prompt for the following input: \n${prompt}.\nRespond in JSON with keys \"text\" and \"imagePrompt\".`
    );

    let data;
    try {
      data = JSON.parse(result.response.text());
    } catch {
      data = { text: result.response.text(), imagePrompt: '' };
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate advertisement' });
  }
});

export default app;

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
