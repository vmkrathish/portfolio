# M K Rathish (VMK) — Portfolio

A premium personal portfolio built with React + Vite, Framer Motion, and Lucide icons. Static site, no backend.

## Content source of truth

All copy, project facts, skills, timeline entries, and links live in **`src/data/portfolio.js`**. Edit that one file to update content across the whole site — nothing else needs to change for text/data edits.

Images are registered in `src/data/images.js` and physically stored in `src/assets/images/`. The resume PDF lives in `public/resume/MK_Rathish_Resume.pdf` and is linked directly (not imported) so it downloads/opens as-is.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Production build

```bash
npm run build
```

Outputs to `dist/`. To preview the production build locally:

```bash
npm run preview
```

## Deploy to Cloudflare Pages

1. Push this project to a GitHub repository (see commands below).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, select the repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. `public/_redirects` is already included so client-side routing (if you add any later) won't 404 on refresh.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/vmkrathish/<your-repo-name>.git
git push -u origin main
```

## Editing content

- **Personal info, education, stats:** `src/data/portfolio.js` → `personal`, `stats`
- **GMS case study:** `src/data/portfolio.js` → `gms`
- **Roadwatch:** `src/data/portfolio.js` → `roadwatch`
- **Other projects / ML work:** `otherProjects`, `mlWork`
- **Skills:** `skillGroups`
- **Timeline:** `timeline`
- **Leadership / hackathons / certifications:** `leadership`, `hackathons`, `certifications`
- **Beyond Code:** `creative`
- **Social links:** `socials`
- **Nav links:** `navLinks`

To add a new image: drop the file in `src/assets/images/`, import + register it in `src/data/images.js`, then reference its key from `portfolio.js`.

## Notes on content accuracy

Every fact on this site (CGPA, project details, technologies, leadership roles, hackathon names, certifications) is sourced directly from the resume document and explicit answers given during scoping — nothing has been invented. If you need to add something not yet on the site (e.g. a new certificate or project), add it to `portfolio.js` following the existing patterns.

## Tech stack

- React 18 + Vite 5
- Framer Motion (animations, respects `prefers-reduced-motion`)
- Lucide React (icons)
- Plain CSS with design tokens (`src/index.css`) — no framework, no unused CSS shipped
