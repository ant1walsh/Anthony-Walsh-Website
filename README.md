# anthony-walsh.com

Personal portfolio for Anthony Walsh — technical product marketing.
Vite + React + TypeScript. The site is a faithful port of the approved
single-page design: `src/App.tsx` mounts the tested markup and
`src/site.ts` runs the page logic (hash router, filters, AI sample,
theme toggle, etc.). Styling lives in `src/index.css`.

## Local development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Editing content

All content lives in `src/site.ts` as plain data arrays near the top:

- `PROJECTS` — case studies (Projects pages)
- `BLOG` — articles + the podcast (thumbnails live in `public/`)
- `TIMELINE`, `TESTIMONIALS`, `STATS`, `AGENTS`, `EXAMPLES`

Images (portrait, blog thumbnails) live in `public/` and are referenced
with root-absolute paths, e.g. `/anthony-portrait.png`.

## Deploying to GitHub Pages (custom domain: anthony-walsh.com)

This repo includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and publishes `dist/` to
GitHub Pages on every push to `main`. `public/CNAME` pins the custom
domain.

### One-time setup

1. **Create/connect the GitHub repo and push:**
   ```bash
   git init                 # if not already a git repo
   git add -A
   git commit -m "Rebuild site as Vite + React"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
2. **Enable Pages via Actions:** GitHub repo → Settings → Pages →
   Build and deployment → Source: **GitHub Actions**.
3. **Add the custom domain:** same Pages settings → Custom domain →
   enter `anthony-walsh.com` → Save. (The CNAME file is already in the
   build, so this should validate.) Leave "Enforce HTTPS" checked once
   the certificate is issued.
4. **Point DNS at GitHub** (at your domain registrar / DNS host):
   - Apex `anthony-walsh.com` → four **A** records:
     `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
     (and optionally the matching **AAAA** records:
     `2606:50c0:8000::153`, `2606:50c0:8001::153`,
     `2606:50c0:8002::153`, `2606:50c0:8003::153`)
   - `www` → **CNAME** to `<your-username>.github.io`
   DNS changes can take up to ~24h to propagate; HTTPS may take a bit
   longer after that.

After the first push, the Actions tab shows the deploy; once green and
DNS resolves, the site is live at https://anthony-walsh.com.

## Notes

- Routing is hash-based (`/#/projects`, `/#/blog`, ...), which avoids
  the deep-link 404 issue on static hosts — no extra config needed.
- The resume preview loads your Dropbox PDF via an embedded viewer; the
  Contact page embeds Calendly; the podcast cover is pulled from
  YouTube's thumbnail CDN. These are external services.
- The AI Agents demo shows curated sample outputs (clearly labeled),
  not live model calls.
