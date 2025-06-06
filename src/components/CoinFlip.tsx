import { useState } from 'react';

export default function CoinFlip() {
  const [result, setResult] = useState<string | null>(null);

  function flip() {
    const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
    setResult(outcome);
  }

  return (
    <div>
      <button onClick={flip}>Flip for it</button>
      {result && (
        <p>
          {result === 'heads' ? 'Heads! Go for it.' : 'Tails! Maybe not.'}
        </p>
      )}
    </div>
  );
}
