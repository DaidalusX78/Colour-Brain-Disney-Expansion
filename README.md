# Colour Brain: Disney & Pixar Expansion Deck 🎨✨

[![Deploy to GitHub Pages](https://github.com/DaidalusX78/Colour-Brain-Disney-Expansion/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/DaidalusX78/Colour-Brain-Disney-Expansion/actions/workflows/deploy-pages.yml)
[![Live Demo](https://img.shields.io/badge/Play_Live_App-daidalusx78.github.io%2FColour--Brain--Disney--Expansion-06b6d4?style=flat&logo=googlechrome&logoColor=white)](https://daidalusx78.github.io/Colour-Brain-Disney-Expansion/)
[![Version](https://img.shields.io/badge/Version-v1.12.1-702082.svg)](CHANGELOG.md)
[![PWA](https://img.shields.io/badge/PWA-Ready-10b981.svg)](manifest.json)
[![Language](https://img.shields.io/badge/Language-English_%7C_Espa%C3%B1ol-E61C24.svg)](index.html)

A digital tabletop companion and modern expansion deck for **Colour Brain: Disney Edition** (inspired by the party game from *Big Potato Games*). 

Bring modern Disney, Pixar, Disney Channel, Marvel, and Star Wars questions to your family game night, complete with a live multi-team scoreboard, authentic card-flip animations, sound effects, smart shuffling, and bilingual support!

👉 **[Play the App Live on GitHub Pages](https://daidalusx78.github.io/Colour-Brain-Disney-Expansion/)**

---

## 🌟 Features

- 🃏 **50+ Modern Expansion Cards**: Questions featuring recent releases and fan favourites (*Encanto*, *Inside Out 2*, *Elemental*, *Turning Red*, *Wish*, *Moana 2*, *Descendants 1–5*, *Zombies 1–4*, *The Mandalorian*, *Loki*, *Ahsoka*, *Moon Knight*, and more).
- 🗃️ **Multi-Category Deck Filtering**: Select individual franchises or mix them freely:
  - **All Questions** (Full Expansion)
  - **Walt Disney Animation Studios** (*Classic & Modern Features*)
  - **Pixar Animation Studios**
  - **Disney Channel & DCOMs** (*Descendants, Zombies, Vampirina, etc.*)
  - **Marvel Studios**
  - **Lucasfilm** (*Star Wars*)
- 👥 **Interactive Scoreboard & Team Builder**:
  - Supports **2 to 6 teams or individual players**.
  - Quick-pick character presets (*Mickey, Stitch, Simba, Grogu, Vampirina, Elsa*).
  - Custom team names, 12 signature colour palettes, and dynamic UI theme tinting.
- 📜 **Flexible Rules & Scoring Modes**:
  - **Official Colour Brain Rules**: 1 point awarded to all teams who answered correctly, *only if at least one team got it wrong*.
  - **Pot Rollover Mode**: If all teams answer correctly (or all get it wrong), the point rolls over into a jackpot pot for the next round!
  - **Custom Target Score**: Default 10 points (configurable from 1 to 25).
  - **Sudden Death Mode**: Tiebreaker mechanism when multiple teams cross the target score simultaneously.
- ⏱️ **Optional 30-Second Round Timer**: Built-in countdown with visual progress bar and synthesized buzzer.
- 🔀 **Unseen-First Smart Shuffle**: Tracks questions seen in your session using `localStorage` so questions do not repeat until every card has been drawn.
- 🌐 **Bilingual (English & Spanish)**: Instant on-the-fly switching between English and Español for all UI text, card questions, colour names, and answer explanations.
- 🔊 **Web Audio & Voice Host (TTS)**:
  - Retro synth sound effects (card draws, point dings, winner fanfare, confetti celebration).
  - On-demand Voice Read-Aloud host using browser Speech Synthesis (press <kbd>S</kbd> or click the speaker button).
- 📱 **Progressive Web App (PWA)**: Installable to your iPhone/iPad/Android home screen with full offline support via service worker.
- 📊 **Google Sheets Live-Sync & CSV Import**: Sync custom question decks directly from a shared Google Sheet or upload your own CSV file.

---

## 🎮 How to Play

Use this app alongside your physical Colour Brain colour cards:

1. **Set Up Teams**: Choose 2–6 teams, pick your names and player colours in the setup wizard.
2. **Read the Card**: Read the question aloud. The number inside the Mickey silhouette on the bottom right tells you how many colour cards each team must secretly place face-down (1, 2, or 3).
3. **Reveal the Answer**: Tap **Reveal Answer** (or press <kbd>Space</kbd>).
4. **Score the Round**: Mark which teams answered correctly. Points will automatically be calculated and applied based on your chosen rule set (Official vs. Pot Rollover).
5. **Win the Game**: First team to reach the target score (default 10 points) triggers the victory celebration!

---

## ⌨️ Controls & Gestures

| Action | Control |
|---|---|
| **Flip / Reveal Answer** | Tap Card / Big Button or press <kbd>Space</kbd> |
| **Next Card** | Tap **Next** button, swipe left, or press <kbd>→</kbd> |
| **Previous Card** | Tap **Prev** button, swipe right, or press <kbd>←</kbd> |
| **Read Card Aloud** | Tap Speaker icon (<i data-lucide="volume-2"></i>) or press <kbd>S</kbd> |
| **Toggle Menu** | Tap Hamburger (<i data-lucide="menu"></i>) |

---

## 🛠️ Project Structure

```text
src/
├── index.html                                # Main production entry point
├── questions.js                             # Trivia database array (questions, colours, artwork)
├── colourbrain_disney_questions_v1.7.0.csv   # Source spreadsheet export for trivia
├── footer.md                                 # Legal & fan project notice and disclaimer
├── manifest.json                             # Web app manifest for PWA installation
├── sw.js                                     # Service worker for offline asset caching
├── assets/
│   ├── answers/                              # Artwork, stills, and illustrations for revealed answers (.webp)
│   ├── logos/                                # Studio & franchise SVG/WebP vector logos
│   └── silhouettes/                          # Mickey Mouse silhouette indicator SVG
└── .github/
    └── workflows/
        └── deploy-pages.yml                  # Automatic GitHub Pages CI/CD pipeline
```

---

## 💻 Local Development

Because this project is built entirely in vanilla modern web technologies with no build steps or heavy node dependencies, you can run it with any static web server:

```bash
# Using Python
cd src
python -m http.server 8000

# Using Node (npx)
cd src
npx serve .
```

Open `http://localhost:8000` in your browser.

---

## 🚀 Deployment

The repository is configured with a GitHub Actions workflow (`.github/workflows/deploy-pages.yml`). Any push to `main` or `master` automatically triggers a zero-downtime deployment to GitHub Pages.

---

## 👏 Credits & Acknowledgements

- **Expansion Deck & Web App**: Created, developed & curated by **[Marc Bailey](https://github.com/DaidalusX78)** ([@DaidalusX78](https://github.com/DaidalusX78)).
- **Original Game Concept**: Huge shoutout and special credit to **[Big Potato Games](https://bigpotato.com/)** for the creation of the original, awesome **Colour Brain** board game! Support their fantastic games at [bigpotato.com](https://bigpotato.com/).

---

## ⚖️ Disclaimer & Legal Notice

This is an **unofficial, non-commercial fan-made companion app and expansion deck** created for personal tabletop game nights. 

- *Colour Brain* is a registered trademark of **Big Potato Games**.
- Disney, Pixar, Marvel, Star Wars, and related character names, franchises, and artwork are registered trademarks of **Disney Enterprises, Inc.**, **Pixar**, **Marvel Characters, Inc.**, and **Lucasfilm Ltd.**
- No copyright infringement is intended. Please support the official game by purchasing *Colour Brain: Disney Edition* from Big Potato Games.
- For complete legal details, see [footer.md](footer.md) or tap the **Legal & Fan Notice** link in the app's settings menu.

