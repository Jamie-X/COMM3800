# Walk for Green+ (WFG+)

A smart campus mobility app prototype for CUHK. Turn every campus step into PE credits, rewards, and a greener campus.

**COMM3800 Digital Media & Application · The Chinese University of Hong Kong · 2026**

![WFG+](https://img.shields.io/badge/status-prototype-8DB255?style=flat-square) ![React](https://img.shields.io/badge/react-18-4A6B20?style=flat-square)

## 🌿 Live Demo

Visit: `https://<your-username>.github.io/<repo-name>/`

## 📱 Features

- **GPS Virtual Check-in** — Walk near any of 12 campus checkpoints, auto-verified
- **Health Sync** — Steps & calories from Apple Health / Google Fit count toward PE credits
- **Schedule & Booking** — Get notified about PE classes, book gym and PE facilities
- **Redeem Rewards** — In-campus canteen vouchers + off-campus restaurant coupons
- **Friends & College Cup** — Compete with friends, cheer with thumbs-up, climb the college leaderboard
- **Multi-language** — English, Traditional Chinese (繁體), Simplified Chinese (简体)
- **Dark Mode** — With smooth jelly spring animations
- **Carbon Tracker** — Visualize CO₂ saved by walking instead of shuttling

## 🎨 Design

- TODU flat design style — sage green (`#D5E3B3`) + deep black (`#1C1C1E`)
- DM Sans typography, rounded 14–20px corners
- Cubic-bezier spring animations for all toggles and tab selectors
- Cute boar mascot inspired by CUHK's campus wildlife

## 🚀 Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder `/`
4. Save — your site will publish at `https://<username>.github.io/<repo>/`

No build step required — the app uses Babel Standalone to compile JSX in the browser.

## 📂 Files

| File | Purpose |
|------|---------|
| `index.html` | Entry point (loads React + Babel + prototype) |
| `wfg-plus-v5.jsx` | Main prototype source (React component) |

## 🛠 Tech Stack

- **React 18** (via CDN)
- **Babel Standalone** for in-browser JSX compilation
- **Inline styles** (no CSS framework)
- **No build tooling** — works as a static site

## 💡 Local Development

```bash
# Just serve the folder with any static server:
python3 -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

## 📄 License

COMM3800 academic project. Not for commercial use.
