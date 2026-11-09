# AKTAL — Independent website design preview

A standalone, responsive presentation prototype inspired by the layout at [Jewar's projects page](https://www.jewarsa.com/ar/categories), with AKTAL's existing website identity and project-card format.

**Preview:** https://mdeldeeb.github.io/aktal-design-preview/

## Scope

- Independent repository and GitHub Pages deployment.
- No changes to Lovable, the production website, CRM, permissions or customer records.
- Public project snapshot captured from aktal.com.sa on 9 November 2026. Pricing and availability are not live; visitors can open the official project page for current information.
- Home, Projects and Broker Platform routes; remaining official pages are in the side menu and open in a new tab.
- Arabic and English; project/city/district names use Arabic in Arabic and English in English.
- Same current website typeface: IBM Plex Sans Arabic. Brand palette: #0D0A24, #1F1A4D, #7B71C2, #E4DFDB and white.
- Project search, city/district/delivery filters, price sorting, project detail modal, share links, appearance switch and system appearance default.

## Run locally

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/ . No build or dependencies required.

## Routes

- `#/projects` (default)
- `#/home`
- `#/brokers`
- `#/projects?project=arch` (shareable project detail)

## Publishing

GitHub Pages: deploy `main` branch, root directory. All paths are relative, so the site works from a repository subpath. `.nojekyll` disables unnecessary Jekyll processing.

All project photography and AKTAL marks belong to their respective rights holders. This repository does not grant a license to redistribute the brand or property assets. Typeface licensing is supplied in `assets/OFL.txt`.
