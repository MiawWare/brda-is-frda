document.getElementById("profileForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const profile = {
    username: formData.get("username"),
    age: formData.get("age"),
    pronouns: formData.get("pronouns"),
    bio: formData.get("bio"),
    score: Number(localStorage.getItem("brainRotScore")),
  };

  localStorage.setItem("userProfile", JSON.stringify(profile));

  document.getElementById("profileSection").classList.remove("active");
  document.getElementById("swipeSection").classList.add("active");
});
