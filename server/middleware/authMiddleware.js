import jwt from 'jsonwebtoken';
import pool from '../db.js'; // Veritabanı bağlantı dosyan

export async function checkAdmin(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token bulunamadı' });
  }

  const token = authHeader.split(' ')[1]; // Bearer token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Veritabanından kullanıcıyı kontrol et
    const result = await pool.query('SELECT is_admin FROM users WHERE id = $1', [decoded.userId]);
    
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Kullanıcı bulunamadı' });
    }

    if (!result.rows[0].is_admin) {
      return res.status(403).json({ error: 'Yetkiniz yok' });
    }

    req.user = decoded; // Kullanıcı bilgilerini req'ye ekle
    next();

  } catch (err) {
    return res.status(401).json({ error: 'Geçersiz token' });
  }
}
