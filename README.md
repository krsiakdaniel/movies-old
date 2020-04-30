<div align="center">
  <p>
    <a href="https://movies.krsiak.cz/">
      <img
      width="128"
      height="128"
      alt="movies"
      src="https://raw.githubusercontent.com/krsiakdaniel/movies/master/src/assets/png/logo-128.png"
      />
    </a>
  </p>
    <h1>Movies</h1>
    <p>I am a big movie fan and just in cinema I watched 100 movies in 10 years.</p>
  <p>
    <a href="https://movies.krsiak.cz/">https://movies.krsiak.cz/</a>
  </p>

[![Uptime Robot status](https://img.shields.io/uptimerobot/status/m784723880-fee7f3be2f7dc41793c2024c?label=website)](https://stats.uptimerobot.com/7DxZ0imzV4)
[![Netlify](https://img.shields.io/netlify/ffdb97fb-1b98-4b1f-843b-f79ca6a0e1e0)](https://app.netlify.com/sites/movies-krsiak/deploys)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/743125152cfc42d68e414657f635eb19)](https://app.codacy.com/manual/krsiakdaniel/movies/files?bid=17493411)
</div>

[![movies](https://movies.krsiak.cz/og-image.png)](https://movies.krsiak.cz/)

## 🔗 Project links

  - 📚 [Study plan](study-plan.md) shows what I learnt about JavaScript, TypeScript and React.
  - 📆 [Project board](https://github.com/krsiakdaniel/movies/projects/1?fullscreen=true) describes what is planned and in progress.
  - 🔑 [TMDb API](https://github.com/krsiakdaniel/movies/wiki) setup explained in project Wiki.
  - ⚙️ [Technologies](technologies.md) used to build this app.
  - 🔨 Scripts are in [Makefile](Makefile).

## ⚛ React

  - `make start` = Run app on <http://localhost:3000/>
  - `make build` = Build the app in `/build/` folder.

## ✨ Prettier

  - `make prettier` = Using [.prettierrc](.prettierrc) options format files on save or manually.

## 🐛 Cypress

[E2E tests](cypress/integration) run on **Netlify**, locally and can be recorded in [Cypress Dashboard](https://dashboard.cypress.io/projects/tcj8uu/runs).

  - `make cy-open` = Cypress interactive mode.
  - `make cy-run` = Run tests in terminal.
  - `make cy-record` = Run tests and record them online.

## 📦 Deployment

This app uses [Netlify](https://app.netlify.com/sites/movies-krsiak/deploys) automation to:

1. Build app from `master` branch on each commit.
2. Runs **Cypress tests** during build:
  1. ✅ Tests are ok = site gets published.
  2. ⛔ Tests fail = build stops.
3. Use `make netlify-build` to run Netlify build preview locally.
