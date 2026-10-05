<!-- ═══════════════ ANIMATED HERO ═══════════════ -->
<div align="center">

<!-- Layer 1: aurora wave header -->
<img src="https://capsule-render.vercel.app/api?type=venom&color=gradient&customColorList=12,6,20,24&height=120&section=header&animation=twinkling" width="100%" alt="" />

<!-- Layer 2: custom animated SVG banner (assets/banner.svg) -->
<img src="./assets/banner.svg" width="100%" alt="LocaLoom - Connect. Discover. Experience." />

<!-- Layer 3: typing animation -->
<a href="https://localoom.netlify.app/">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=22&duration=2800&pause=700&color=EC4899&center=true&vCenter=true&width=720&lines=Discover+amazing+events+in+your+neighbourhood+%F0%9F%93%8D;Heritage+walks+%E2%80%A2+Food+trails+%E2%80%A2+Fitness+%E2%80%A2+Learn;Volunteer+%E2%80%A2+Socialise+%E2%80%A2+Meet+your+Delhi+community;Create+an+event+in+under+a+minute+%E2%9A%A1" alt="Typing animation" />
</a>

<br/><br/>

<a href="https://localoom.netlify.app/"><img src="https://img.shields.io/badge/🌐_Live_Demo-localoom.netlify.app-ec4899?style=for-the-badge" alt="Live demo" /></a>
<img src="https://img.shields.io/badge/Made_for-Delhi_🇮🇳-f97316?style=for-the-badge" alt="Made for Delhi" />
<img src="https://img.shields.io/badge/Hosted_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
<img src="https://img.shields.io/badge/Status-Live-22c55e?style=for-the-badge" alt="Status" />

<br/><br/>

<!-- Live repo stats (replace YOUR_USERNAME/YOUR_REPO) -->
<img src="https://img.shields.io/github/stars/YOUR_USERNAME/YOUR_REPO?style=social" alt="Stars" />
<img src="https://img.shields.io/github/forks/YOUR_USERNAME/YOUR_REPO?style=social" alt="Forks" />
<img src="https://img.shields.io/github/last-commit/YOUR_USERNAME/YOUR_REPO?color=8B5CF6&label=last%20commit" alt="Last commit" />
<img src="https://img.shields.io/github/issues/YOUR_USERNAME/YOUR_REPO?color=f97316" alt="Issues" />

<br/><br/>

**[✨ Features](#-features)** &nbsp;•&nbsp; **[🗂 Categories](#-event-categories)** &nbsp;•&nbsp; **[🧭 User Flow](#-user-flow)** &nbsp;•&nbsp; **[🛠 Tech Stack](#-tech-stack)** &nbsp;•&nbsp; **[⚡ Quick Start](#-quick-start)** &nbsp;•&nbsp; **[🗺 Roadmap](#-roadmap)**

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,6,20,24&height=4&section=header" width="100%" alt="divider" />

## 📖 About

**LocaLoom** weaves your city together. It's a community platform where people in **Delhi** can find, join and create local events — from sunrise heritage walks to street-food trails, fitness meetups, workshops and volunteering drives — all happening right in their neighbourhood.

> 🧵 *Loom* (n.) — a device that weaves threads into fabric. LocaLoom weaves **locals** into a community.

<div align="center">

| 🔍 **Discover** | 🎟 **Join** | ➕ **Create** |
|:---:|:---:|:---:|
| Browse events by category and location | Reserve your spot in one tap | Host your own event for free or paid |

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,6,20,24&height=4&section=header" width="100%" alt="divider" />

## ✨ Features

| | Feature | Details |
|:---:|:---|:---|
| 🏠 | **Event Feed** | Upcoming events at a glance with an *Explore Events* call-to-action |
| 🗂 | **Category Filters** | Filter instantly: Heritage, Food, Fitness, Learn, Volunteer, Social |
| 📍 | **Event Locations** | See events near you on a location view |
| ➕ | **Create Event** | Title, description, category, organizer, date, time, location, price (₹) & max attendees |
| 💸 | **Free or Paid** | Enter `0` for free events — pricing in Indian Rupees |
| 🔐 | **Auth** | Sign up / sign in with email and password |
| 👤 | **Profile** | Track events joined, created and attended |
| 📱 | **Responsive** | Built to work on desktop and mobile |

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,6,20,24&height=4&section=header" width="100%" alt="divider" />

## 🗂 Event Categories

<div align="center">

<img src="https://img.shields.io/badge/🏛_Heritage-b45309?style=for-the-badge" alt="Heritage" />
<img src="https://img.shields.io/badge/🍜_Food-ef4444?style=for-the-badge" alt="Food" />
<img src="https://img.shields.io/badge/💪_Fitness-22c55e?style=for-the-badge" alt="Fitness" />
<img src="https://img.shields.io/badge/📚_Learn-3b82f6?style=for-the-badge" alt="Learn" />
<img src="https://img.shields.io/badge/🤝_Volunteer-a855f7?style=for-the-badge" alt="Volunteer" />
<img src="https://img.shields.io/badge/🎉_Social-ec4899?style=for-the-badge" alt="Social" />

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,6,20,24&height=4&section=header" width="100%" alt="divider" />

## 🧭 User Flow

```mermaid
flowchart LR
    A[🏠 Home] --> B{Logged in?}
    B -- No --> C[🔐 Sign Up / Login]
    C --> D
    B -- Yes --> D[🔍 Browse & Filter Events]
    D --> E[🎟 Join Event]
    D --> F[➕ Create Event]
    E --> G[👤 Profile · Joined / Attended]
    F --> G
    style A fill:#f97316,stroke:#fff,color:#fff
    style C fill:#8b5cf6,stroke:#fff,color:#fff
    style D fill:#ec4899,stroke:#fff,color:#fff
    style E fill:#22c55e,stroke:#fff,color:#fff
    style F fill:#06b6d4,stroke:#fff,color:#fff
    style G fill:#24292e,stroke:#fff,color:#fff
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,6,20,24&height=4&section=header" width="100%" alt="divider" />

## 🛠 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,netlify,git,github,vscode&theme=dark" alt="Tech stack icons" />

</div>

<!-- ✏️ Update this table to match your real stack (React, Vite, Tailwind, etc.) -->

| Layer | Technology |
|:---:|:---|
| 🎨 **Frontend** | HTML · CSS · JavaScript |
| ☁️ **Hosting** | [Netlify](https://www.netlify.com/) |
| 🧰 **Tooling** | Git · GitHub · VS Code |

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,6,20,24&height=4&section=header" width="100%" alt="divider" />

## ⚡ Quick Start

```bash
# 1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 2️⃣ Move into the project
cd YOUR_REPO

# 3️⃣ Serve it locally (static site)
npx serve .
```

🎉 Open the URL shown in your terminal and you're live!

<details>
<summary><b>📦 Using a framework (npm / Vite)?</b></summary>
<br/>

```bash
npm install
npm run dev
```

</details>

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,6,20,24&height=4&section=header" width="100%" alt="divider" />

## 🚀 Deployment

Deployed on **Netlify** — every push to the main branch can trigger an automatic redeploy.

[![Visit LocaLoom](https://img.shields.io/badge/🌐_Visit_LocaLoom-ec4899?style=for-the-badge)](https://localoom.netlify.app/)

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,6,20,24&height=4&section=header" width="100%" alt="divider" />

## 🗺 Roadmap

- [x] Event feed with category filters
- [x] Create event form
- [x] Login & sign-up screens
- [x] User profile with event stats
- [ ] 🗺 Interactive map of nearby events
- [ ] 🔔 Event reminders & notifications
- [ ] 💳 Online payments for paid events
- [ ] 💬 Event chat & comments
- [ ] 🌍 Expand beyond Delhi

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12,6,20,24&height=4&section=header" width="100%" alt="divider" />

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. 🍴 Fork the repo
2. 🌿 Create a branch: `git checkout -b feature/amazing-feature`
3. 💾 Commit: `git commit -m "Add amazing feature"`
4. 📤 Push: `git push origin feature/amazing-feature`
5. 🔃 Open a Pull Request

<!-- ═══════════════ ANIMATED FOOTER ═══════════════ -->
<div align="center">

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&duration=2500&pause=1000&color=F97316&center=true&vCenter=true&width=480&lines=Made+with+%E2%9D%A4%EF%B8%8F+in+Delhi;Star+%E2%AD%90+this+repo+if+you+like+it!;See+you+at+the+next+event!+%F0%9F%8E%89" alt="Footer typing" />

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,6,20,24&height=140&section=footer" width="100%" alt="Footer wave" />

</div>
