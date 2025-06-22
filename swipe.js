const passBtn = document.getElementById("passBtn");
const likeBtn = document.getElementById("likeBtn");
const restartBtn = document.getElementById("restartBtn");
const matchResult = document.getElementById("matchResult");
const swipeCard = document.getElementById("swipeCard");

let otherUsers = [];
let currentSwipe = 0;
let currentUser = JSON.parse(localStorage.getItem("userProfile"));

fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
  headers: { "X-Master-Key": JSONBIN_API_KEY }
})
  .then(res => res.json())
  .then(data => {
    const allUsers = data.record || [];
    otherUsers = allUsers.filter(u => u.username !== currentUser.username);
    showProfile(currentSwipe);
  })
  .catch(err => console.error("Error loading matches:", err));

function showProfile(index) {
  if (index >= otherUsers.length) {
    swipeCard.innerHTML = "<p>No more matches 😢</p>";
    passBtn.style.display = "none";
    likeBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    matchResult.textContent = "";
    return;
  }

  const match = otherUsers[index];
  swipeCard.innerHTML = `
    <h3>${match.username}</h3>
    <p><strong>Score:</strong> ${match.score}</p>
    <p>${match.bio}</p>
  `;
  passBtn.style.display = "inline-block";
  likeBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  matchResult.textContent = "";
}

passBtn.addEventListener("click", () => {
  currentSwipe++;
  showProfile(currentSwipe);
});

likeBtn.addEventListener("click", () => {
  const match = otherUsers[currentSwipe];
  const diff = Math.abs(currentUser.score - match.score);

  let result;
  if (diff <= 3) result = "💘 Brainrot Soulmates!";
  else if (diff <= 8) result = "🙂 Good Match!";
  else result = "🫣 Too Normal / Too Deep in Rot";

  matchResult.textContent = result;

  currentSwipe++;
  showProfile(currentSwipe);
});

restartBtn.addEventListener("click", () => {
  // Option 1: Start quiz over
  window.location.reload();

  // Option 2: Or reset app state manually:
  // currentSwipe = 0;
  // showProfile(currentSwipe);
  // matchResult.textContent = "";
  // passBtn.style.display = "inline-block";
  // likeBtn.style.display = "inline-block";
  // restartBtn.style.display = "none";
});
