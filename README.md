# Cloud Computing Education Portal

A functional Svelte prototype for a private school educational platform. It demonstrates cloud computing use cases: grading, online exams, administrative tasks, and communication. Everything runs locally in the browser (mock data only), so it can be deployed to Vercel immediately.

## Project structure

- `src/store.js` — Fake in-memory database (users, materials, tests, current user).
- `src/routes/Admin.svelte` — Admin panel for managing users and uploading materials.
- `src/routes/Estudiante.svelte` — Student portal to download materials and take exams.
- `src/routes/Ranking.svelte` — Live ranking table derived from test results.
- `src/routes/TestCloud.svelte` — Cloud Computing Environment & Security Challenges test.
- `src/lib/translations.js` — English / Spanish translations.

## Local development

Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Local preview before deploying

Build the production version and preview it locally:

```bash
npm run build
npm run preview
```

The preview URL is usually `http://localhost:4173`.

## Deploy to Vercel

This project uses `@sveltejs/adapter-static` to generate a static site, so it works on any Vercel Node version without runtime errors.

Make sure you have the [Vercel CLI](https://vercel.com/docs/cli) installed and logged in:

```bash
npm i -g vercel
vercel login
```

From the project folder run:

```bash
vercel
```

Follow the prompts. Once you are happy with the preview deployment, run:

```bash
vercel --prod
```

## Built-in users

You can switch users in the top navigation:

- `admin@school.edu` — Administrator
- `edgar.diaz@school.edu` — Student
- `grace.rivera@school.edu` — Student
- `carlos.m@school.edu` — Student
- `ana.lopez@school.edu` — Student
- `luis.t@school.edu` — Student
- `mariana.v@school.edu` — Student

## Creators

- Edgar Diaz
- Grace Rivera
- Estudiantes ESPE
