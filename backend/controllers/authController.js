const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    await db.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashed]);
    res.status(201).json({ message: 'Registered successfully' });
  } catch (err) {
    res.status(400).json({ message: 'User already exists' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const [users] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  if (!users.length) return res.status(400).json({ message: 'Invalid email' });

  const user = users[0];
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(400).json({ message: 'Wrong password' });

  const token = jwt.sign({ id: user.id, username: user.username, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

exports.updateProfile = async (req, res) => {
  const { username, email, password } = req.body;
  const userId = req.user.id;

  try {
    const fields = [];
    const values = [];

    if (username) { fields.push('username = ?'); values.push(username); }
    if (email) { fields.push('email = ?'); values.push(email); }
    if (password) { const hashed = await bcrypt.hash(password, 10); fields.push('password = ?'); values.push(hashed); }

    if (!fields.length) return res.status(400).json({ message: 'Nothing to update' });

    values.push(userId);
    await db.execute(`UPDATE users SET ${fields.join(', ')} WHERE id = ?`, values);

    const token = jwt.sign({ id: userId, username, email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Profile updated successfully', token });
  } catch (err) {
    res.status(500).json({ message: 'Update failed' });
  }
};

exports.deleteAccount = async (req, res) => {
  const userId = req.user.id;
  try {
    await db.execute('DELETE FROM users WHERE id = ?', [userId]);
    res.json({ message: 'Account deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete account' });
  }
};

exports.googleLogin = async (req, res) => {
  const { token } = req.body;
  try {
    const { OAuth2Client } = require('google-auth-library');
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    if (!token) return res.status(400).json({ message: 'No token provided' });

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const email = payload.email;
    const username = payload.name || (payload.email && payload.email.split('@')[0]) || 'google_user';

    const [users] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    let userId;
    if (users.length) {
      userId = users[0].id;
    } else {
      const [result] = await db.execute('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);
      userId = result.insertId;
    }

    const jwtToken = jwt.sign({ id: userId, username, email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token: jwtToken });
  } catch (err) {
    console.error('Google login error:', err);
    res.status(400).json({ message: 'Google login failed' });
  }
};
