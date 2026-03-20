# Remy Shingiro | Software Engineer Portfolio

> A production-ready, high-performance developer portfolio built with React, TypeScript, and Tailwind CSS v4. Engineered for maximum speed, accessibility, and SEO.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Site-2f81f7?style=for-the-badge)](https://remy.space)

## 🏗 Architecture & Engineering Focus

This portfolio was architected with a strict focus on separation of concerns, scalability, and modern web vitals:

* **Layered Component Design:** UI primitives (buttons, cards, typography) are completely decoupled from data-fetching and layout logic.
* **Performance First:** Achieves near-perfect Lighthouse scores through route-level code splitting (`React.lazy` and `Suspense`), optimized asset delivery, and lightweight SVG icons.
* **Premium Micro-Interactions:** Utilizes Framer Motion for hardware-accelerated, spring-physics-based scroll reveals and layout transitions without blocking the main thread.
* **Serverless Architecture:** Integrated with Cloudflare Edge Networks for global low-latency delivery, and Web3Forms for a zero-cost, serverless contact backend.
* **Technical SEO:** Implements strict semantic HTML5, OpenGraph metadata, and JSON-LD structured data for rich search engine indexing.

## 💻 Tech Stack

* **Core:** React 18, TypeScript, Vite
* **Styling:** Tailwind CSS v4 (CSS-first engine), CSS Variables
* **Animation:** Framer Motion
* **Integrations:** GitHub API (`react-github-calendar`), Web3Forms API
* **Deployment & CI/CD:** Cloudflare Pages

## 🚀 Local Development Setup

To run this project locally, you will need Node.js installed on your machine.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/remyshingiro/your-repo-name.git](https://github.com/remyshingiro/your-repo-name.git)
   cd your-repo-name

Install dependencies:

Bash
npm install
Environment Variables:
Create a .env file in the root directory and add your Web3Forms access key to enable the contact form:

Code snippet
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
Start the development server:

Bash
npm run dev
📁 Directory Structure
Plaintext
├── public/                 # Static assets (Resume, OG Image, Robots.txt)
├── src/
│   ├── components/
│   │   ├── sections/       # Stateful, page-level components (Hero, Projects, Contact)
│   │   └── ui/             # Reusable, stateless atomic UI primitives
│   ├── lib/                # Shared utilities (e.g., Tailwind class merging)
│   ├── App.tsx             # Root layout and lazy-loading orchestrator
│   ├── index.css           # Tailwind v4 theme variables and global styles
│   └── main.tsx            # React DOM entry point
└── tailwind.config.js      # Minimal config (v4 relies mostly on index.css)
🤝 Let's Connect
I am actively building scalable web applications and exploring AI solutions for the agricultural sector in Rwanda. I am currently open to new engineering opportunities.

Portfolio: remy.space

LinkedIn: Remy Shingiro

Email: shingiroremy303@gmail.com

Crafted with React and Tailwind CSS.


Make sure to replace `your-repo-name` under the Local Development Setup section and update the LinkedIn URL at the bottom with your actual profile link before committing! 

Would you like to review strategies for leveraging this new portfolio to reach out to recrui