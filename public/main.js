async function flipCoin() {
  const result = Math.random() < 0.5 ? 'heads' : 'tails';
  document.getElementById('result').textContent = `Result: ${result}`;
  const res = await fetch('/api/generate-ad', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ result })
  });
  const data = await res.json();
  showAd(data, result);
}

document.getElementById('flip').addEventListener('click', flipCoin);

function showAd(data, result) {
  const adDiv = document.getElementById('ad');
  adDiv.innerHTML = '';

  const text = document.createElement('p');
  text.textContent = data.text;
  text.className = 'ad-text';
  text.title = data.imagePrompt;

  const img = document.createElement('img');
  img.src = `https://via.placeholder.com/300x150?text=${encodeURIComponent(result)}`;
  img.alt = result;
  img.title = data.imagePrompt;

  adDiv.appendChild(text);
  adDiv.appendChild(img);
}
