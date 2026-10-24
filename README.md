# NEET Prep Notebook

Study site for NEET: chapter-wise notes (Physics, Chemistry), formula sheets and shortcuts, practice MCQs for every chapter (45 per Biology chapter), and a weekly 720-mark test with analysis. Students sign in with Firebase; an admin dashboard shows every student's progress, tests and activity.

Live: https://neet-prep-notebook.vercel.app

## Layout
- `site/` — the static website (deployed to Vercel)
  - `index.html`, `assets/` (app, styles, Firebase layer)
  - `data/` — syllabus, formula sheets, chapter notes and question banks
- `firestore.rules` — Firestore security rules (paste into Firebase console → Firestore → Rules)
- `FIREBASE-SETUP.md` — how the Firebase project is set up

## Deploy
From `site/`: `vercel --prod`
