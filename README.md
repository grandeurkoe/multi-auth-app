# Multi Auth App

A demo authentication project with both traditional email/password login and Google login. Built for Soovrat Technologies interview.

## Features

- Register/Login with email and password
- Google login integration
- Profile update & delete account
- JWT-based authentication

## Setup

1. Clone the repo:

```bash
git clone https://github.com/<your-username>/multi-auth-app.git
```

2. Install dependencies:

```bash
cd multi-auth-app
npm install
```

3. Create a .env file with:

```ini
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
```

4. Run the app:

```bash
npm run dev
```
