# RCG Advanced — Website

Multi-page website for rcgadvanced.com.

## Files

* `index.html` — Home page
* `about.html` — About page (who we are, how we operate, process)
* `sectors.html` — Sectors page
* `markets.html` — Markets page (six anchor markets)
* `enquire.html` — Enquire page (contact details and form)
* `privacy.html` — Privacy & Cookies policy
* `styles.css` — shared stylesheet used by all pages
* `script.js` — shared JavaScript used by all pages (toggles, sector filter, network map, scroll effects)
* `vercel.json` — enables clean URLs (`/about` instead of `/about.html`)
* `robots.txt` — crawler rules, points to the sitemap
* `sitemap.xml` — lists all six pages for search engines
* `favicon.ico`, `favicon.svg`, `favicon.png`, `apple-touch-icon.png` — site icon in various required formats
* `og-image.png` / `og-image.svg` — the image shown when the site is shared on social media or messaging apps

All files need to stay together in the same folder, since the HTML pages
link to `styles.css` and `script.js` by relative path, and to each other by
filename.

## Deploying

This project has no build step — it's plain HTML/CSS/JS. If it's already
connected to Vercel via GitHub, just replace the files in the repo and push;
Vercel redeploys automatically. See Vercel's own docs for connecting a new
repo or domain if setting this up for the first time.

**Important:** on this project, the site files live inside an `rcg-website`
subfolder of the repo, not the repo root — Vercel's project **Root
Directory** setting is set to `rcg-website` to match. If you ever move the
files, update that setting too.

## Notes

* Google Fonts loads from CDN (requires an internet connection to render the
  monospace typeface correctly; falls back to a system monospace font otherwise).
* The Enquire page form posts to Formspree — replace `YOUR_FORM_ID` in
  `enquire.html` with your real Formspree form ID once you've created one at
  formspree.io, or submissions will fail silently.
* The homepage network map links to the Markets page: clicking a market on
  the homepage map jumps to its card on markets.html.
* `privacy.html` is a starter Privacy & Cookies policy — recommended to have
  it reviewed by a solicitor before relying on it, especially given the
  sectors RCG Advanced operates in.
