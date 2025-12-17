# ProjectWD

ProjectWD is a **static frontend learning project** that recreates the user interface of the Department of Expenditure (Ministry of Finance) website for **educational and demonstration purposes only**. The goal of this project is to understand real‑world website structure, asset organization, and static site hosting workflows.

This project does **not** include backend logic or official data handling and is not affiliated with any government organization.

---

## What this project demonstrates

* Organizing a static website using a clean `public/` deployment root
* Managing assets (CSS, JavaScript, images) in a scalable structure
* Serving static sites locally for development and testing
* Preparing a frontend project for GitHub hosting and review

---

## Project structure

```
projectWD/
├── public/                  # Deployment root
│   ├── *.html               # Entry pages (mainpage.html, about.html, E-Services.html, etc.)
│   └── assets/
│       ├── css/             # Stylesheets
│       ├── js/              # JavaScript files
│       └── images/          # Images and screenshots
├── config/
│   └── settings.json        # Local development settings
├── .gitignore
├── .gitattributes
└── README.md
```

---

## Run locally (quick start)

This project is intended to be opened using the **Live Server extension in VS Code**.

### Steps

1. Open the project folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right‑click `public/mainpage.html`
4. Click **Open with Live Server**

The site will open at:

```
http://127.0.0.1:5500/public/mainpage.html
```

---

## Path handling notes

* HTML files reference styles and scripts using:

  ```
  assets/css/...
  assets/js/...
  ```
* CSS files reference images using:

  ```
  ../images/...
  ```
* If files are moved, relative paths must be updated accordingly.

---

## Git configuration

* `.gitignore` excludes OS files, IDE settings, logs, and temporary files
* `.gitattributes` ensures proper handling of binary files (images) and normalizes text files

Assets inside `public/assets/images/` are intentionally tracked.

---

## Disclaimer

This project is created strictly for **learning and academic purposes**. All trademarks, names, and references belong to their respective owners.

---

## Author

**Shraddha Khetmalis**
B.Tech Computer Science Engineering (2nd Year)
Vishwakarma Institute of Technology, Pune
