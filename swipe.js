function startSwipeDeck(users) {
  const card = document.getElementById("swipeCard");
  let index = 0;

  function showUser(user) {
    if (!user) {
      card.innerHTML = "<p>No more matches!</p>";
      document.getElementById("passBtn").style.display = "none";
      document.getElementById("likeBtn").style.display = "none";
      document.getElementById("restartBtn").style.display = "inline-block";
      return;
    }

    card.innerHTML = `
      <h3>${user.username} (${user.age})</h3>
      <p>${user.pronouns}</p>
      <p>${user.bio}</p>
      <p>Meme Fluency Score: ${user.score}</p>
    `;
  }

  showUser(users[index]);

  document.getElementById("passBtn").onclick = () => {
    index++;
    showUser(users[index]);
  };

  document.getElementById("likeBtn").onclick = () => {
    index++;
    showUser(users[index]);
  };

  document.getElementById("restartBtn").onclick = () => {
    location.reload();
  };
}

// Load mock profiles (excluding current user)
fetch("data/mock_profiles.json")
  .then(res => res.json())
  .then(data => {
    const currentUser = JSON.parse(localStorage.getItem("userProfile"));
    const otherUsers = data.filter(u => u.username !== currentUser.username);
    startSwipeDeck(otherUsers);
  })
  .catch(console.error);
