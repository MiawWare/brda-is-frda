fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
  headers: { "X-Master-Key": JSONBIN_API_KEY }
})
  .then(res => res.json())
  .then(data => {
    const currentUser = JSON.parse(localStorage.getItem("userProfile"));
    const allUsers = data.record || [];
    // exclude yourself
    const otherUsers = allUsers.filter(u => u.username !== currentUser.username);
    // now swipe through otherUsers as before
  });

let otherProfiles = [];
let currentSwipe = 0;

fetch('mock_profiles.json')
  .then(res => res.json())
  .then(data => {
    otherProfiles = data;
    showProfile(currentSwipe);
  });

function showProfile(index) {
  if (index >= otherProfiles.length) {
    document.getElementById('swipeCard').innerHTML = "<p>No more matches 😢</p>";
    return;
  }

  const match = otherProfiles[index];
  document.getElementById('swipeCard').innerHTML = `
    <h3>${match.username}</h3>
    <p><strong>Score:</strong> ${match.score}</p>
    <p>${match.bio}</p>
  `;
}

document.getElementById('passBtn').addEventListener('click', () => {
  currentSwipe++;
  showProfile(currentSwipe);
});

document.getElementById('likeBtn').addEventListener('click', () => {
  const you = JSON.parse(localStorage.getItem('userProfile'));
  const match = otherProfiles[currentSwipe];
  const diff = Math.abs(you.score - match.score);

  let result;
  if (diff <= 3) result = "💘 Brainrot Soulmates!";
  else if (diff <= 8) result = "🙂 Good Match!";
  else result = "🫣 Too Normal / Too Deep in Rot";

  document.getElementById('matchResult').textContent = result;

  currentSwipe++;
  showProfile(currentSwipe);
});
