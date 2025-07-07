
import pool from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';




export async function registerUser({ username, password, is_admin }) {
  if (!username || !password) {
    throw new Error('username ve password zorunludur');
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await pool.query('SELECT id FROM users WHERE username=$1', [username]);
  if (existingUser.rows.length > 0) throw new Error('Kullanıcı zaten mevcut');

  const result = await pool.query(
    'INSERT INTO users (username, password_hash, is_admin) VALUES ($1, $2, $3) RETURNING id, username, is_admin',
    [username, hashedPassword, is_admin || false]
  );

  return result.rows[0];
}

export async function loginUser({ username, password }) {
  const result = await pool.query('SELECT * FROM users WHERE username=$1', [username]);
  if (result.rows.length === 0) throw new Error('kullanıcı adını yanlış girdin ');

  const user = result.rows[0];
  const isValid = await bcrypt.compare(password, user.password_hash);
  if (!isValid) throw new Error('şifreyi yanlış girdin');

  const token = jwt.sign(
    { userId: user.id, username: user.username, isAdmin: user.is_admin },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return {
    token,
    message: 'kolay gelsin iyi düzenlemeler'
  };
}
