# Product Management System (AMS)

A simple **Product Management System** built using **Node.js, Express, MySQL, HTML, CSS, and JavaScript**.  
The application includes authentication, a modern SaaS-style dashboard, product CRUD operations, and a basic reports section.

---

## ✨ Features

### 🔐 Authentication
- Login with username and password
- Session handling using `localStorage`
- Logout functionality
- Route protection (dashboard & reports require login)

### 📦 Product Management
- Add new products
- Edit existing products
- Delete products with confirmation modal
- View product list with price and status

### 📊 Reports
- Total products count
- Total inventory value
- Average product price
- Modern SaaS-style UI consistent with dashboard

### 🎨 UI & UX
- Clean SaaS-style layout
- Persistent sidebar across pages
- Fully responsive design
- Separate pages for Login, Dashboard, and Reports

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MySQL
- REST API

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript

---

## 📁 Project Structure

project-root/
│
├── backend/
│ ├── app.js
│ ├── db.js
│ ├── routes/
│ │ ├── auth.routes.js
│ │ └── product.routes.js
│ └── controllers/
│ ├── auth.controller.js
│ └── product.controller.js
│
├── frontend/
│ ├── login.html
│ ├── dashboard.html
│ ├── reports.html
│ │
│ ├── css/
│ │ ├── style.css
│ │ ├── dashboard.css
│ │ └── reports.css
│ │
│ └── js/
│ ├── auth.js
│ ├── products.js
│ └── reports.js
│
├── database/
│ └── product_db.sql
│
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd project-root

2️⃣ Setup MySQL Database

1. Login to MySQL:
mysql -u root -p

2. Create database:
CREATE DATABASE product_db;
USE product_db;

3. Import SQL file:
SOURCE database/product_db.sql;

3️⃣ Configure Backend

Go to backend folder:
cd backend

Install dependencies:
npm install

Update database credentials in db.js:
host: "localhost",
user: "root",
password: "Root@1234",
database: "product_db"

Start backend server:
node app.js

Backend runs on:
http://localhost:5000

4️⃣ Run Frontend

Open frontend files using Live Server or browser:
login.html → Login Page
dashboard.html → Product Dashboard
reports.html → Reports Section

Recommended:
- Use VS Code Live Server
- OR open via http://127.0.0.1:5500/

🔑 Login Flow
1. Open login.html
2. Login using valid credentials

## Demo Login Credentials

Use the following credentials to log in:

- **Username:** admin  
- **Password:** admin123

3. Redirects to Dashboard
4. Sidebar navigation:

   - Dashboard
   - Reports
   - Logout

5. Logout clears session and redirects to login page


🔒 Authentication Logic

- Login state stored in localStorage
- Protected routes redirect to login if not authenticated
- Logout clears session data

📈 Reports Logic

- Reports are calculated dynamically from product data:
- Total products = number of records
- Total value = sum of prices
- Average price = total value / product count

👨‍💻 Author

Rino Antony
Product Management System – Full Stack Project
Built as part of skill development & project-based learning.