import pool from '../db.js';

export const getExperiences = async () => {
  const res = await pool.query('SELECT * FROM experience ORDER BY id');
  
  return res.rows.map(row => ({
    ...row,
    description: JSON.parse(row.description)
  }));
};


export const addExperience = async (title, descriptionArray) => {
  const res = await pool.query(
    'INSERT INTO experience (title, description) VALUES ($1, $2) RETURNING *',
    [title, JSON.stringify(descriptionArray)]
  );
  return res.rows[0];
};

export const updateExperience = async (id, title, descriptionArray) => {
  const res = await pool.query(
    'UPDATE experience SET title = $1, description = $2 WHERE id = $3 RETURNING *',
    [title, JSON.stringify(descriptionArray), id]
  );
  return res.rows[0];
};

export const deleteExperience = async (id) => {
  const res = await pool.query('DELETE FROM experience WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};
