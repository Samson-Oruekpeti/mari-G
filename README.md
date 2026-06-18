# Marigold Café

A multi-page website for a fictional neighbourhood café, built as a portfolio piece. Cozy, casual branding with a hand-illustrated visual identity (a marigold-flower mark, a chalkboard-style menu, line-art icons) instead of stock photography.

**Stack:** React 19 + Vite + React Router + Tailwind CSS. Fonts: Fraunces (display), Karla (body), Caveat (handwritten accents) via Google Fonts.

## Pages

- **Home** — hero, intro strip, featured items, hours/location band, testimonial
- **Menu** — categorized menu styled as a chalkboard (Coffee & Drinks, Morning, Pastries, Lunch)
- **About** — founding story, values, team
- **Contact** — address/hours, a working front-end contact form, an illustrated map

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs static files to `dist/`. The `public/_redirects` file is already set up for Netlify so client-side routing (the Menu/About/Contact pages) works after a static deploy.

## Deploying

- **Netlify:** connect the repo (or drag the `dist/` folder after building) with build command `npm run build` and publish directory `dist`.
- **Vercel:** import the repo — it auto-detects Vite, no extra config needed.

## Things to customize before using this for a real client

- All content (café name, menu items, prices, address, team names, hours) is placeholder — written to feel real, but invented.
- The contact form (`src/pages/Contact.jsx`) only updates local state on submit — it doesn't send anywhere yet. Wire it up to something like Formspree, EmailJS, or a Supabase table + edge function.
- `hello@marigoldcafe.example` and the phone number are placeholders.
- The "map" on the Contact page is a hand-drawn illustration, not a real map — swap in Google Maps/Mapbox embed if you need actual directions.

## Project structure

```
src/
  components/
    Illustrations.jsx   — shared SVG icon set (the visual signature)
    Navbar.jsx
    Footer.jsx
  pages/
    Home.jsx
    Menu.jsx
    About.jsx
    Contact.jsx
  App.jsx                — router setup
  index.css              — Tailwind layers + base styles
tailwind.config.js       — color palette & font families
```
