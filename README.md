# Hadi ZareZadeh — Portfolio (Vue 3 + Vite + Tailwind)

A modern, responsive portfolio website built with Vue 3, Vite, and Tailwind CSS. Showcasing the work and skills of Hadi ZareZadeh, a Data Science & AI-focused developer.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework with Composition API
- **Vite** - Fast build tool and development server
- **Vue Router** - Official router for Vue.js
- **Tailwind CSS** - Utility-first CSS framework
- **@heroicons/vue** - Beautiful hand-crafted SVG icons
- **ESM** - Modern JavaScript modules

## 📁 Project Structure

```
portfolio/
├── public/
│   └── 404.html              # GitHub Pages SPA redirect
├── src/
│   ├── assets/
│   │   └── tailwind.css      # Global styles and utilities
│   ├── components/
│   │   ├── SiteNavbar.vue    # Navigation component
│   │   ├── SiteFooter.vue    # Footer with scroll-to-top
│   │   ├── ProjectCard.vue   # Project showcase card
│   │   ├── SkillBadge.vue    # Skill tag component
│   │   └── ContactForm.vue   # Contact form component
│   ├── pages/
│   │   ├── HomePage.vue      # Landing page
│   │   ├── AboutPage.vue     # About and skills page
│   │   ├── ProjectsPage.vue  # Portfolio showcase
│   │   └── ContactPage.vue   # Contact information
│   ├── router/
│   │   └── index.js          # Vue Router configuration
│   ├── utils/
│   │   └── imageProxy.js     # Image optimization utility
│   ├── App.vue               # Main app component
│   └── main.js               # App entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── postcss.config.js         # PostCSS configuration
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Custom CSS animations and transitions
- **Image Optimization** - Automatic image proxying via wsrv.nl
- **SEO Optimized** - Meta tags and semantic HTML
- **Accessibility** - ARIA labels and keyboard navigation
- **Performance** - Lazy loading and code splitting
- **GitHub Pages Ready** - Configured for easy deployment

## 🚀 Deployment

### GitHub Pages

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "chore: init portfolio with Vue 3 + Vite + Tailwind"
   ```

2. **Set up remote repository:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/HadiZareZadeh/portfolio.git
   git push -u origin main
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch and "/ (root)" folder
   - Your site will be available at: `https://HadiZareZadeh.github.io/portfolio/`

## 📝 Customization

Replace placeholder content in the following files:

- `src/pages/HomePage.vue` - Hero section and introduction
- `src/pages/AboutPage.vue` - Personal information and skills
- `src/pages/ProjectsPage.vue` - Project showcase
- `src/pages/ContactPage.vue` - Contact information
- `src/components/` - Component-specific content

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

**Note:** This is a demo portfolio. Replace placeholder images and content with your actual information before deploying.
