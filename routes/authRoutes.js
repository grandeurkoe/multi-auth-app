const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/google', authController.googleLogin);

router.get('/me', verifyToken, (req, res) => {
  res.json({ user: req.user });
});

router.put('/me', verifyToken, authController.updateProfile);
router.delete('/me', verifyToken, authController.deleteAccount);

module.exports = router;
