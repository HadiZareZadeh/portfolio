
### 1) Install dependency
```bash
npm install --save-dev gh-pages
```

### 2) Verify scripts and config
- package.json scripts now include:
```json
"predeploy": "vite build",
"deploy": "gh-pages -d dist"
```
- `vite.config.js` base is:
```js
base: '/portfolio/'
```

### 3) Initialize git and create repo
Run these in the project root:
```bash
git init
git add .
git commit -m "chore: init portfolio with Vue 3 + Vite + Tailwind"
git branch -M main
git remote add origin https://github.com/HadiZareZadeh/portfolio.git
git push -u origin main
```

If the `portfolio` repo doesn't exist yet, create it first. You can do it via GitHub UI (New repository → Name: portfolio → Public → no README), or via GitHub CLI:
```bash
gh repo create HadiZareZadeh/portfolio --public --source=. --remote=origin --push
```

### 4) Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build the site to `dist/`
- Publish `dist/` to the `gh-pages` branch

### 5) Enable Pages (if needed)
- On GitHub: Settings → Pages → Select Branch: `gh-pages` → `/ (root)` → Save.

### 6) Live URL
- After a minute or two, the site will be available at:
- https://HadiZareZadeh.github.io/portfolio/

If you want to use non-hash history with GitHub Pages, we can add a `404.html` redirect to support client-side routing.