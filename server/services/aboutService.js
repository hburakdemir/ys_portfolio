import pool from '../db.js';

export async function getAboutData() {
  const result = await pool.query('SELECT * FROM about ORDER BY id ASC');
  return result.rows;
}

export async function addAboutItem(text) {
  const result = await pool.query(
    'INSERT INTO about (text) VALUES ($1) RETURNING *',
    [text]
  );
  return result.rows[0];
}

export async function updateAboutItem(id, text) {
  const result = await pool.query(
    'UPDATE about SET text = $1 WHERE id = $2 RETURNING *',
    [text, id]
  );
  return result.rows[0];
}

export async function deleteAboutItem(id) {
  const result = await pool.query(
    'DELETE FROM about WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
}
