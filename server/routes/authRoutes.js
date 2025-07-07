import express from 'express';
import * as authService from '../services/authService.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.error('kayıt hatası', err);
    res.status(400).json({ error: err.message || 'Bilinmeyen hata oluştu' });
  }
});

router.post('/login', async (req, res) => {
  try {
     console.log('giriş yapan kullanıcı:', req.body);
    const { token, message } = await authService.loginUser(req.body);
    res.json({ token, message });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
