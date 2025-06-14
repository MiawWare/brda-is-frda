// Replace this with fetch('curated.json') if using an external file
let memes = [];
fetch('/memes/curated.json')
  .then(response => response.json())
  .then(data => {
    memes = data;
    startQuiz(); // start showing memes
  });

function startQuiz() {
  // your quiz logic here (same as before)
}


// Scoring weights
const weights = {
    basic: 1,
    medium: 2,
    deep: 3,
    ancient: 2,
    cursed: 5
};

let currentIndex = 0;
let score = 0;

// DOM elements
const quizContainer = document.getElementById("quiz");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

function showMeme(index) {
    const meme = memes[index];
    quizContainer.innerHTML = `
        <h2>${meme.name}</h2>
        <img src="${meme.image}" alt="${meme.name}" style="max-width: 100%; height: auto;">
        <p>First seen: ${meme.first_appearance} on ${meme.platform}</p>
        <a href="${meme.kym_url}" target="_blank">View on KnowYourMeme ↗</a>
    `;
}

function showResult() {
    quizContainer.innerHTML = "";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    let label;
    if (score <= 3) label = "✨ Casually Online";
    else if (score <= 7) label = "💻 Moderately Terminal";
    else if (score <= 12) label = "📟 Deep in the Feed";
    else label = "🧠 Brain Rot MAXED";

    result.innerHTML = `
        <h2>Your Brain Rot Score: ${score}</h2>
        <p>${label}</p>
        <p>Thanks for playing. You are ${label}.</p>
    `;
}

// Handle answer
function handleAnswer(yes) {
    const meme = memes[currentIndex];
    if (yes) {
        score += weights[meme.rating] || 0;
    }

    currentIndex++;
    if (currentIndex < memes.length) {
        showMeme(currentIndex);
    } else {
        showResult();
    }
}

// Event listeners
yesBtn.addEventListener("click", () => handleAnswer(true));
noBtn.addEventListener("click", () => handleAnswer(false));

// Start quiz
showMeme(currentIndex);
