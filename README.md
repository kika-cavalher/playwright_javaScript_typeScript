📘 README — Automated Project with Playwright

🧪 About the project
This project demonstrates a complete end-to-end automation workflow using Playwright to test a web application built with:
Backend: Node.js + Express + TypeORM + SQLite
Frontend: HTML + JavaScript
Testing: Playwright

📦 Prerequisites
Make sure you have the following installed:

Node.js (v18+)
NPM 



⚙️ Setting up the environment

✅ Clone the project
cd project-folder
git clone <repo-url>

✅ Install Playwright
npm init -y
npm install -D playwright
npx playwright install

🔧 Application setup

📦 Backend (API)
cd apps/api
npm install
npm run db:init     # Run migrations
npm run dev         # Start the API server 

Tech stack:
express
typeorm
sqlite
cors
yup
express-async-errors

⚠️ SQLite database is created automatically by TypeORM.

🌐 Frontend (WEB)
cd apps/web
npm install
npm run dev
Access your app at: http://localhost:8080

✅ Running the app locally for testing

Before running automated tests, make sure:
The backend server is running on http://localhost:3000
The frontend is running on http://localhost:8080
Playwright requires the app to be online in order to simulate real user actions.

▶️ Running the tests

npx playwright test

▶️ Run in UI mode (debug/testing)

npx playwright test --ui

