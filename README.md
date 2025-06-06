# Decision-Flipper
An app that helps you make decisions about the small choices in life.

Decision-Flipper is a playful application that uses a coin flip and AI-generated suggestions to help you make quick choices. The project is intended for lighthearted decision-making; you remain responsible for your own real-world decisions.

## Goals
- Provide an easy way to flip a virtual coin to resolve simple dilemmas.
- Generate short ads or suggestions using an AI model to add extra fun to your choices.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000` in your browser.

## API Keys
The app requires an API key for the AI integration. Create a `.env` file in the project root and add your key:

```bash
OPENAI_API_KEY=your-openai-api-key-here
```

Make sure to restart the development server after updating environment variables.

## Features
- **Coin Flip** – Click a button to instantly get heads or tails for trivial decisions.
- **Ad Generation** – Provide a prompt and the AI will generate a short, playful advertisement or suggestion.

## Disclaimer
Decision-Flipper is meant for entertainment only. Use it as a fun aid, but your actual choices are your own responsibility.
