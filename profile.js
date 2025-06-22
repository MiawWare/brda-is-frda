const JSONBIN_API_KEY = "$2a$10$KuVKNnmxQQmsZ4g3M0dnG.pUxb7RMjhNjGCZmy/qapjSSN424kuCq";
const BIN_ID = "685880b88a456b7966b39945";

console.log("profile.js loaded");

document.getElementById('profileForm').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent form reload

  console.log("Profile form submitted");

  const formData = new FormData(this);

  const profile = {
    username: formData.get("username"),
    age: formData.get("age"),
    pronouns: formData.get("pronouns"),
    bio: formData.get("bio"),
    score: Number(localStorage.getItem("brainRotScore")),
  };

  console.log("Profile data to save:", profile);
  
  // Read existing users first
  fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
    headers: {
      "X-Master-Key": JSONBIN_API_KEY
    }
  })
    .then(res => res.json())
    .then(data => {
      const users = data.record || [];
      users.push(profile);

      // Now update the bin with new data
      return fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": JSONBIN_API_KEY,
          "X-Bin-Versioning": false
        },
        body: JSON.stringify(users)
      });
    })
    .then(() => {
      localStorage.setItem("userProfile", JSON.stringify(profile));
      // Switch UI views only after successful save
      document.getElementById('profileSection').classList.remove('active');
      document.getElementById('swipeSection').classList.add('active');
    })
    .catch(err => {
      console.error("Failed to save profile:", err);
      alert("Oops, something went wrong saving your profile. Please try again.");
    });
});
