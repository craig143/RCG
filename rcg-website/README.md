# RCG Advanced — Website

Single-page website for rcgadvanced.com.

## Deploy to Vercel (Option 1 — Recommended, no code needed)

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Go to [github.com](https://github.com) and create a new repository called `rcg-website`
3. Upload `index.html` and `vercel.json` to the repository
4. In Vercel, click **Add New Project** and import the GitHub repository
5. Click **Deploy** — Vercel handles everything automatically
6. Your site will be live at `rcg-website.vercel.app` within seconds
7. To connect `rcgadvanced.com`: go to Project Settings > Domains and add your domain

## Deploy to Vercel (Option 2 — Vercel CLI)

```bash
npm install -g vercel
cd rcg-website
vercel
```

Follow the prompts. Your site will be live at a Vercel URL immediately.

## Deploy via Vercel Drag and Drop (Quickest option)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag the entire `rcg-website` folder onto the page
3. Done. Live in under 60 seconds.

## Files

- `index.html` — complete single-page website
- `vercel.json` — Vercel routing configuration
- `README.md` — this file

## Connecting Your Domain (rcgadvanced.com)

Once deployed on Vercel:
1. Go to your project dashboard on Vercel
2. Settings > Domains > Add `rcgadvanced.com`
3. Vercel will give you DNS records to add in your domain registrar
4. SSL is automatic and free

## Notes

- No build step required. Pure HTML/CSS/JS.
- Google Fonts loads from CDN (requires internet connection to render correctly)
- Form submissions are front-end only — connect to Vercel Forms, Formspree or Netlify Forms to receive submissions by email
