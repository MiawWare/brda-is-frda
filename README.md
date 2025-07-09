# brda-is-frda
# 🧠 BrainRot Dating 💘

Welcome to **BrainRot Dating** — a swipe-based dating app that matches people based on how terminally online they are. Instead of asking about your hobbies or favorite foods, we ask the important questions:  
**Do you know who Skibidi Toilet is? Can you identify the "uueeeeiiiaaa cat"?**

## 🔍 What is this?

This is the **MVP (minimum viable product)** of a dating app for meme enjoyers. Users complete a meme fluency quiz, get categorized by their level of internet brain rot, and (eventually) swipe through potential matches with shared meme literacy.

This version is a **web-based prototype** hosted with GitHub Pages. A mobile app will follow once the core experience is validated.

## 🚀 Live Demo

[👉 Try it now](https://yourusername.github.io/brainrot-dating/) (replace with your live URL)

## 🧪 Features

- 🧠 Meme Recognition Quiz to assess how online you are
- 📊 "Brain Rot Score" with tiered personality types
- 💘 Early swipe-style matching UI (in development)
- 🔒 Frontend-only, safe and open source

## 🛠 Tech Stack

- HTML / CSS / JavaScript
- Optional: React + Tailwind (planned)
- Hosted via GitHub Pages

## 📂 Project Structure
/public
├── /images # Meme assets
├── index.html # Landing page
├── quiz.html # Meme fluency quiz
├── match.html # (Placeholder) swipe UI
└── /scripts
└── quiz.js # Handles meme quiz logic


## 🧩 Meme Fluency Categories

Once the quiz is complete, users are sorted into categories like:

- 🧟 Terminally Online
- 📉 Mildly Rotting
- 🐣 Internet Normie
- 🐸 Niche Forum Lurker
- 🤖 AI-Generated Humor Victim

These categories will guide matching and profile suggestions.

## 🧪 Roadmap

- [x] Meme recognition quiz (basic)
- [ ] Swipe-based UI for matching
- [ ] Backend for storing matches (Firebase or Supabase)
- [ ] Personality-based match algorithm
- [ ] Mobile app (React Native or Capacitor)

## 🤝 Contributing

Contributions welcome! Feel free to:
- Submit memes to add to the quiz
- Suggest features, categories, or UI changes
- Help build the swipe functionality

## 📜 License

MIT License — use, remix, and rot responsibly.

## Addition information: rating system v1
Each meme in the quiz has a rating field that represents how recognizable or obscure it is. This helps us build accurate profiles based on how deeply users are immersed in internet culture.

| Rating    | Description                                                                         | Examples                                           |
| --------- | ----------------------------------------------------------------------------------- | -------------------------------------------------- |
| `basic`   | Widely recognizable and recently viral — even normies might know these.             | Uueeeeiiiaaa Cat, Skibidi Toilet, Gigachad, Wojak  |
| `medium`  | Known to regular internet users but not mainstream.                                 | Wide Putin, Jerma edits, Slenderman TikToks        |
| `deep`    | Niche memes known mainly by chronically online users or forum lurkers.              | Loss.jpg, Hypercam 2, "Tony Pizza"                 |
| `ancient` | Early 2000s–2010s internet classics — useful for inferring age or platform history. | Keyboard Cat, Charlie Bit My Finger, Honey Badger  |
| `cursed`  | Weirdcore, ironic, deep-fried, or absurdist memes with unhinged vibes.              | Deep fried Shrek, Soundclown edits, weirdcore cats |



## Brain Rot Scoring System
After users complete the quiz, their responses are scored based on the rating of each meme they recognized.

| Rating    | Score Value |
| --------- | ----------- |
| `basic`   | +1          |
| `medium`  | +2          |
| `deep`    | +3          |
| `ancient` | +2          |
| `cursed`  | +5          |

The total score is used to assign the user a Brain Rot Tier, which determines their level of internet fluency and helps with matching users who "get it."


## 🧪 Run Locally

```bash
git clone https://github.com/yourusername/meme-quiz-app
cd meme-quiz-app
open index.html


---

> Built with love and terminally online energy 💀✨
Started 14jun25