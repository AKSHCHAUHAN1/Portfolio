# Cyberpunk Portfolio
A highly interactive, cyberpunk-themed and terminal-inspired personal developer portfolio. Built with modern web technologies, it features a unique heads-up display (HUD) aesthetic, scanlines, custom animations, and a rich operational intelligence system.

## 🚀 Tech Stack
- **Framework:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling:** Custom CSS + [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## ✨ Key Features
- **HUD/Cyberpunk Aesthetic:** Terminal overlays, grid backgrounds, chamfered edge paths, and scanline overlays.
- **Interactive Routing:** Hash-based SPA routing with smooth page transition animations.
- **Projects:** Rich project views featuring responsive image hover interactions.
- **Operational Intelligence (Blogs):** Smooth scroll-based reveal animations, dynamic Markdown-style rendering, and URL pushState synchronization for seamless back-navigation capabilities.
- **Integrated Terminal:** A dynamic CLI experience baked straight into the UI layer.

## 📦 Getting Started

### Prerequisites
Make sure you have Node.js installed (v16.0.0 or higher recommended).

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AKSHCHAUHAN1/Portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install
   # or pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the localhost port provided in the terminal (usually `http://localhost:5173`).

## 🛠 Build for Production

To build the static site for production deployment:

```bash
npm run build
```

This will bundle the assets into the `dist/` directory, minified and ready to be hosted on Vercel, Netlify, GitHub Pages, or AWS S3.

## Security and deployment

This is a static, client-side portfolio. It does not have a server, database, authentication, or a message submission API; the contact form opens the visitor's email app. Do not put secrets or private data in the frontend bundle.

Security response headers are included in `vercel.json` for Vercel and `public/_headers` for Netlify and Cloudflare Pages. The Content Security Policy allows the external icon image CDNs used by the project. If you add another external asset or service, update the policy deliberately. GitHub Pages does not support per-site response headers; configure equivalent headers at a CDN or reverse proxy in front of it.

The deployment host must serve the site over HTTPS. Review production response headers after deployment because hosts and proxies can override repository configuration.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
