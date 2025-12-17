# projectWD

ProjectWD is a static site copy of the Department of Expenditure (Ministry of Finance) frontend used for learning and demonstration. The site has been reorganized for easy local preview and static hosting.

## What's in this repository

- `public/` — all site pages and assets (recommended deployment root)
  - `public/*.html` — entry pages (about.html, mainpage.html, E-Services.html, etc.)
  - `public/assets/css/` — stylesheets
  - `public/assets/js/` — JavaScript
  - `public/assets/images/` — images and screenshots
- `config/settings.json` — local dev settings (kept in `config/`)

## Quick start — preview locally
From the repository root run one of these commands to serve the `public/` folder:

Using Python 3:

```powershell
Set-Location 'C:\sem1\wd\projectWD-main\public'
python -m http.server 8000
# Open http://localhost:8000
```

Using `live-server` (requires Node.js):

```powershell
npx live-server public --port=5502
# Open http://127.0.0.1:5502
```

## Path handling notes

- HTML files in `public/` reference CSS/JS using `assets/css/...` and `assets/js/...`.
- CSS files use `url('../images/...')` to reference images in `public/assets/images`.

If you move files again, update references accordingly.

## Prepare repo for GitHub

I added a recommended `.gitignore` and `.gitattributes` (see below). To push to GitHub:

1. Create a repository on GitHub (e.g. `your-username/projectWD`).
2. Run these commands locally from the project root:

```powershell
git init
git checkout -b main
git add .
git commit -m "chore: reorganize site into public/ and consolidate assets"
# add remote (replace URL with your GitHub repo)
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

## Files added for Git

- `.gitignore` — excludes OS, IDE, logs, and common temp files (does not ignore `public/assets/images`).
- `.gitattributes` — ensures binary files (images) are treated as binary and normalizes text files.



