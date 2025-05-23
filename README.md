## 📘 README — Automated Project with Playwright

### 🧪 About the project
> This project demonstrates a complete end-to-end automation workflow using Playwright to test a web application built with:
> Backend: Node.js + Express + TypeORM + SQLite
> Frontend: HTML + JavaScript
> Testing: Playwright

### 📦 Prerequisites
Make sure you have the following installed:

- [X] Node.js (v18+)
- [X] NPM 


### ⚙️ Setting up the environment

#### ✅ Clone the project

```sh 
cd project-folder 
```
```sh 
git clone <repo-url> 
```

#### ✅ Install Playwright
```sh 
npm init -y 
```
```sh 
npm install -D playwright 
```
```sh 
npx playwright install 
```

### 🔧 Application setup

#### 📦 Backend (API)

```sh 
cd apps/api 
```
```sh 
npm install 
```
```sh 
npm run db:init  # Run migrations
```      
```sh 
npm run dev  # Start the API server 
```      

##### Tech stack:
- [X] express
- [X] typeorm
- [X] sqlite
- [X] cors
- [X] yup
- [X] express-async-errors

##### ⚠️ SQLite database is created automatically by TypeORM.

#### 🌐 Frontend (WEB)
```sh 
cd apps/web 
``` 
```sh 
npm install 
``` 
```sh 
npm run dev 
``` 

##### Access your app at: http://localhost:8080

### ✅ Running the app locally for testing

Before running automated tests, make sure:
- [X] The backend server is running on http://localhost:3000
- [X] The frontend is running on http://localhost:8080
- [X] Playwright requires the app to be online in order to simulate real user actions.

### ▶️ Running the tests

```sh 
npx playwright test --reporter html                  # create report
``` 
```sh 
npx playwright test --headed                         # show the test
``` 
```sh 
npx playwright test --debug --reporter=html          # open the playwright spec
``` 
```sh 
npx playwright test tasks --debug --reporter=html    # open a especific suit
``` 


### ▶️ Run in UI mode (debug/testing)

```sh 
npx playwright show-report
``` 

###  🔍 Running Tests in Headed Mode (Visible Browser)
To always run tests with the browser UI visible (non-headless), add the following to the use section of your playwright.config.ts:
```sh
use: { headless: false }
``` 