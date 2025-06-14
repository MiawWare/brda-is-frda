// Replace this with fetch('memes.json') if using an external file
const memes = [
    {
        "name": "Oo Ee A E A Cat",
        "image": "https://knowyourmeme.com/photos/2606605-i-wake-up-there-is-x",
        "kym_url": "https://knowyourmeme.com/memes/oo-ee-a-e-a-cat-remixes",
        "first_appearance": "2023",
        "platform": "TikTok",
        "rating": "basic"
    },
    {
        "name": "Skibidi Toilet",
        "image": "https://i.ytimg.com/vi/RjzJIb5cbrE/hqdefault.jpg",
        "kym_url": "https://knowyourmeme.com/memes/subcultures/skibidi-toilet",
        "first_appearance": "2023",
        "platform": "YouTube",
        "rating": "basic"
    },
    {
        "name": "Wide Putin Walking",
        "image": "https://i.ytimg.com/vi/VQ7lKPSUc2g/hqdefault.jpg",
        "kym_url": "https://knowyourmeme.com/memes/wide-putin-walking-its-him",
        "rating": "medium",
        "first_appearance": "2020",
        "platform": "YouTube"
    },
    {
        "name": "Loss.jpg",
        "image": "https://i.kym-cdn.com/photos/images/newsfeed/000/143/193/cad-20080602-358b1.jpg?1309710446",
        "kym_url": "https://knowyourmeme.com/memes/loss",
        "rating": "deep",
        "first_appearance": "2008",
        "platform": "Ctrl+Alt+Del"
    },
    {
        "name": "Keyboard Cat",
        "image": "https://i.ytimg.com/vi/J---aiyznGQ/hqdefault.jpg",
        "kym_url": "https://knowyourmeme.com/memes/keyboard-cat",
        "rating": "ancient",
        "first_appearance": "2009",
        "platform": "YouTube"
    },
    {
        "name": "Honey Badger Don’t Care",
        "image": "https://i.ytimg.com/vi/4r7wHMg5Yjg/hqdefault.jpg",
        "kym_url": "https://knowyourmeme.com/memes/honey-badger",
        "rating": "ancient",
        "first_appearance": "2011",
        "platform": "YouTube"
    },
    {
        "name": "Rickroll",
        "image": "https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg",
        "kym_url": "https://knowyourmeme.com/memes/rickroll",
        "rating": "ancient",
        "first_appearance": "2006",
        "platform": "4chan"
    }
];

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
