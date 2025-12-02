# Multi Auth App

**Multi Auth App** is a simple web application, featuring both traditional email/password login and Google login. Users can register, log in, update their profile, and delete their account. The backend uses JWT for secure authentication.

## 🚀 Features

* 🔐 **Email/Password login & registration**
* 🌐 **Google login integration**
* 📝 **Update profile** (username, email, password)
* ❌ **Delete account**
* 🔑 **JWT-based authentication**
* 💻 Responsive UI with **Bootstrap 5**

## 🛠️ Tech Stack

### Backend

* **Node.js + Express.js**
* **MySQL** (via `mysql2`)
* **JWT** for authentication
* RESTful API structure
* Google OAuth 2.0 for login

### Frontend

* **HTML, CSS, JavaScript**
* **Bootstrap 5**
* LocalStorage for token management

## ⚙️ Setup Instructions

### 📁 Clone the Repository

```bash
git clone https://github.com/yourusername/multi-auth-app.git
cd multi-auth-app
```

### 🧩 Install Dependencies

```bash
npm install
```

### 🛢️ Configure Environment Variables

Create a `.env` file in the root:

```env
PORT=3000
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
```

### ▶️ Run the Application

```bash
npm run dev
```

App will be available at: [http://localhost:3000](http://localhost:3000)

---

## 📸 Screenshots

**Google Login**

<div align="center">
  <img src="google-login.png" alt="Google Login" width="400"/>
</div>

**Profile Page (after Google login)**

<div align="center">
  <img src="google-profile.png" alt="Profile Page" width="400"/>
</div>

---

## 🧩 Folder Structure Overview

```bash
multi-auth-app/
├── backend/              # All backend & frontend files are here
│   ├── controllers/      # Authentication logic
│   ├── middleware/       # JWT verification, etc.
│   ├── routes/           # API routes
│   ├── public/           # Frontend HTML/CSS/JS files
│   │   ├── login.html
│   │   ├── register.html
│   │   └── profile.html
│   ├── db.js             # MySQL connection
│   └── server.js         # Express server
├── .gitignore
├── LICENSE
├── README.md
├── google-login.png
└── google-profile.png
```

---

## 🧰 Built Using

<p>
  <img alt="HTML5" src="https://img.shields.io/badge/-HTML5-e34f26?style=flat-square&logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/-CSS3-264de4?style=flat-square&logo=css3&logoColor=white" />
  <img alt="Bootstrap" src="https://img.shields.io/badge/-Bootstrap-59287a?style=flat-square&logo=bootstrap&logoColor=white" />
  <img alt="Node.JS" src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white" />
  <img alt="Express" src="https://img.shields.io/badge/express.js-000000?style=flat-square&logo=express&logoColor=white" />
  <img alt="MySQL" src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" />
  <img alt="Postman" src="https://img.shields.io/badge/-Postman-fb7505?style=flat-square&logo=postman&logoColor=white" />
  <img alt="Visual Studio Code" src="https://img.shields.io/badge/-VSCode-0078d7?style=flat-square&logo=visualstudiocode&logoColor=white" />
  <img alt="Git" src="https://img.shields.io/badge/-Git-f34f29?style=flat-square&logo=git&logoColor=white" />
  <img alt="Github" src="https://img.shields.io/badge/-Github-14232c?style=flat-square&logo=github&logoColor=white" />
</p>

---

## ✍️ Authors

*Initial work* – [grandeurkoe](https://github.com/grandeurkoe)
