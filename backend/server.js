const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
const path = require('path');
const fs = require('fs');

const app = express();

app.use(cors({ origin: "*", methods: ["GET","POST","PUT","DELETE"], allowedHeaders: ["Content-Type","Authorization"] }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login.html', (req, res) => {
  const file = path.join(__dirname, 'public', 'login.html');
  let html = fs.readFileSync(file, 'utf8');
  const clientId = process.env.GOOGLE_CLIENT_ID || '';
  html = html.replace(/%GOOGLE_CLIENT_ID%/g, clientId);
  res.send(html);
});

app.get('/', (req, res) => res.send('Server is alive'));

app.use('/api/auth', (req, res, next) => { console.log("Auth route hit ->", req.method, req.url); next(); }, authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
