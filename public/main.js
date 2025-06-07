async function flipCoin() {
  const result = Math.random() < 0.5 ? 'heads' : 'tails';
  document.getElementById('result').textContent = `Result: ${result}`;
  try {
    const res = await fetch('/api/generate-ad', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: result })
    });

    if (!res.ok) {
      throw new Error('API request failed');
    }

    const data = await res.json();
    showAd(data, result);
  } catch (err) {
    console.error(err);
    showError('Failed to load advertisement');
  }
}

document.getElementById('flip').addEventListener('click', flipCoin);

function showAd(data, result) {
  const adDiv = document.getElementById('ad');
  adDiv.innerHTML = '';

  const text = document.createElement('p');
  text.textContent = data.text || '';
  text.className = 'ad-text';
  text.title = result;

  const img = document.createElement('img');
  img.src = data.imageUrl || `https://via.placeholder.com/300x150?text=${encodeURIComponent(result)}`;
  img.alt = result;
  img.title = result;
  adDiv.appendChild(text);
  adDiv.appendChild(img);
}

function showError(message) {
  const adDiv = document.getElementById('ad');
  adDiv.innerHTML = `<p class="error">${message}</p>`;
}
