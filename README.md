# mattiaalessi.github.io

Portfolio personale — React 19 + Vite + TypeScript + React Three Fiber.
Piano completo di progetto: vedi `PLAN.md` nella repo del piano (decisioni, milestone M0–M7, acceptance criteria).

## Comandi

```bash
npm install     # installa dipendenze (una volta)
npm run dev     # server di sviluppo con hot reload
npm run build   # type-check (tsc -b) + build di produzione in dist/
npm run preview # serve localmente la build di produzione
```

## Deploy su GitHub Pages

1. Crea su GitHub una repo pubblica chiamata **esattamente** `mattiaalessi.github.io`
2. Collega e push questo progetto:

```bash
git init -b main
git add .
git commit -m "M0: scaffold + deploy pipeline"
git remote add origin https://github.com/MattiaAlessi/mattiaalessi.github.io.git
git push -u origin main
```

3. Nella repo su GitHub: **Settings → Pages → Source: GitHub Actions**

Da quel momento ogni push su `main` pubblica automaticamente il sito su
`https://mattiaalessi.github.io`.

> Se in futuro sposti il sito in una repo dal nome diverso (es. `portfolio`),
> cambia `base` in `vite.config.ts` da `'/'` a `'/portfolio/'`.

## Struttura

```
src/
├── components/
│   ├── sections/    # Hero, Projects, About, Contact (HTML sopra il canvas)
│   └── scene/       # TODO M3: tutto il 3D (HeroCanvas, GlowOrb, Particles, Effects)
├── data/projects.ts # contenuti progetti tipizzati — aggiungi qui i repo
├── styles/tokens.css# design tokens (colori, font)
└── index.css
```

I contenuti segnati `TODO M5` (email reale, bio, cv.pdf) vanno sostituiti prima del lancio.
