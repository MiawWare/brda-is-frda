let memes = [];
let score = 0;
let currentIndex = 0;

fetch('memes/curated.json')
  .then(res => res.json())
  .then(data => {
    memes = data;
    showMeme(currentIndex);
  });

function showMeme(index) {
  if (index >= memes.length) {
    localStorage.setItem('brainRotScore', score);
    document.getElementById('quizSection').classList.remove('active');
    document.getElementById('profileSection').classList.add('active');
    document.getElementById('scoreDisplay').textContent = score;
    return;
  }

  const meme = memes[index];
  document.getElementById('quizContainer').innerHTML = `
    <h3>${meme.name}</h3>
    <img src="${meme.image}" alt="${meme.name}" />
    <p><a href="${meme.kym_url}" target="_blank">Know Your Meme</a></p>
  `;
}

document.getElementById('yesBtn').addEventListener('click', () => {
  score++;
  currentIndex++;
  showMeme(currentIndex);
});

document.getElementById('noBtn').addEventListener('click', () => {
  currentIndex++;
  showMeme(currentIndex);
});
