# Deploy your portfolio for free

Your project is ready to deploy. Choose one option below.

---

## Option 1: Vercel (recommended, ~2 minutes)

1. **Push your code to GitHub** (if you haven’t already):
   - Create a new repo at [github.com/new](https://github.com/new) (e.g. `portfolio`).
   - In your project folder run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub.
   - Click **Add New…** → **Project**.
   - Import your GitHub repo (e.g. `portfolio`).
   - Leave **Build Command** as `npm run build` and **Output Directory** as `dist`.
   - Click **Deploy**.

3. Your site will be live at `https://your-project.vercel.app`. You can add a custom domain in the project **Settings**.

---

## Option 2: Netlify

1. **Push your code to GitHub** (same as step 1 above).

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://www.netlify.com) and sign in with GitHub.
   - Click **Add new site** → **Import an existing project** → **GitHub** and choose your repo.
   - Build command: `npm run build`  
   - Publish directory: `dist`  
   - Click **Deploy site**.

3. Your site will be at `https://random-name.netlify.app`. You can change the name and add a custom domain in **Site settings**.

---

## Option 3: GitHub Pages

1. **Push your code to GitHub** (same as step 1 above).

2. **Configure for GitHub Pages**:
   - In `vite.config.js`, set `base` to your repo name. For example, if your repo is `https://github.com/Harsh22013110/portfolio`, add:
   ```js
   export default defineConfig({
     base: '/portfolio/',
     plugins: [react()],
   })
   ```

3. **Deploy with GitHub Actions** (recommended):
   - In your repo go to **Settings** → **Pages**.
   - Under **Source** choose **GitHub Actions**.
   - Create the file `.github/workflows/deploy.yml` in your project with this content:

   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: dist
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

   - Commit and push. After the workflow runs, your site will be at `https://YOUR_USERNAME.github.io/portfolio/`.

---

## After deploying

- **Custom domain**: In Vercel or Netlify, add your domain in project/site settings and follow their DNS instructions.
- **HTTPS**: All three options provide free HTTPS.
- **Updates**: Push to `main` and Vercel/Netlify will auto-rebuild; for GitHub Pages, each push to `main` triggers the workflow.
