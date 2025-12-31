# GovWebReplica – Static Frontend Website Project

GovWebReplica is a static frontend learning project that recreates the user interface of the **Department of Expenditure (Ministry of Finance, India)** website for **educational and demonstration purposes only**.

The goal of this project is to understand how real-world government websites are structured, how assets are organized at scale, and how static frontend projects are prepared for local development and GitHub hosting.

This project focuses purely on frontend concepts. No backend, database, or live data is used.

---

## 🎯 What This Project Demonstrates

- Structuring a static website using a clean deployment root (`public/`)
- Organizing assets (CSS, JavaScript, images) in a scalable manner
- Working with relative paths in real-world frontend projects
- Serving static websites locally for development and testing
- Preparing frontend-only projects for GitHub review and hosting
- Understanding layout and navigation of large informational websites

---

## 🛠 Tech Stack

- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- VS Code Live Server  

---

## 📁 Project Structure

projectWD/
├── public/ # Deployment root
│ ├── *.html # Entry pages (mainpage.html, about.html, E-Services.html, etc.)
│ └── assets/
│ ├── css/ # Stylesheets
│ ├── js/ # JavaScript files
│ └── images/ # Images and screenshots
├── config/
│ └── settings.json # Local development settings
├── .gitignore
├── .gitattributes
└── README.md
---

## ▶️ Run Locally (Quick Start)

This project is intended to be run using the **Live Server** extension in VS Code.

### Steps
1. Open the project folder in VS Code  
2. Install the **Live Server** extension (by Ritwick Dey)  
3. Right-click `public/mainpage.html`  
4. Click **Open with Live Server**

The site will open at:
http://127.0.0.1:5500/public/mainpage.html


---

## 📎 Path Handling Notes

- HTML files reference assets using:
assets/css/...
assets/js/...

- CSS files reference images using:

If files or folders are moved, relative paths must be updated accordingly.

---

## ⚙️ Git Configuration

- `.gitignore` excludes OS files, IDE settings, logs, and temporary files
- `.gitattributes` ensures proper handling of binary files (images) and normalizes text files
- Assets inside `public/assets/images/` are intentionally tracked

---

## ⚠️ Disclaimer

This project is created **strictly for learning and academic purposes**.  
All trademarks, names, logos, and references belong to their respective owners.  
This project is **not affiliated with or endorsed by any government organization**.

---

## 👩‍💻 Author

**Shraddha Khetmalis**  
B.Tech Computer Science Engineering (2nd Year)  
Vishwakarma Institute of Technology, Pune

