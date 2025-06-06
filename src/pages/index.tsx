import { useState } from 'react';
import CoinFlip from '../components/CoinFlip';

export default function Home() {
  const [question, setQuestion] = useState('');

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Decision Flipper</h1>
      <input
        type="text"
        placeholder="Ask your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <div style={{ marginTop: '1rem' }}>
        <CoinFlip />
      </div>
    </main>
  );
}
