# RCG Advanced — Website

Multi-page website for rcgadvanced.com.

## Files

* `index.html` — Home page
* `about.html` — About page (who we are, how we operate, markets, process)
* `enquire.html` — Enquire page (contact details and form)
* `styles.css` — shared stylesheet used by all three pages
* `script.js` — shared JavaScript used by all three pages (toggles, sector filter, network map, scroll effects)
* `vercel.json` — enables clean URLs (`/about` instead of `/about.html`)

All five files need to stay together in the same folder, since the HTML pages
link to `styles.css` and `script.js` by relative path, and to each other by
filename (`about.html`, `enquire.html`, etc.).

## Deploying

This project has no build step — it's plain HTML/CSS/JS. If it's already
connected to Vercel via GitHub, just replace the files in the repo and push;
Vercel redeploys automatically. See Vercel's own docs for connecting a new
repo or domain if setting this up for the first time.

## Notes

* Google Fonts loads from CDN (requires an internet connection to render the
  monospace typeface correctly; falls back to a system monospace font otherwise).
* Form submissions on the Enquire page are front-end only — connect to Vercel
  Forms, Formspree or a similar service to actually receive submissions by email.
* The homepage network map and the About page's market cards are linked: clicking
  a market on the homepage map jumps to its card on the About page.
