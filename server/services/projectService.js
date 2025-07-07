import pool from '../db.js';

export const getProjects = async () => {
  const res = await pool.query('SELECT * FROM projects ORDER BY id');
  return res.rows;
};

export const addProject = async (title, description) => {
  const res = await pool.query(
    'INSERT INTO projects (title, description) VALUES ($1, $2) RETURNING *',
    [title, JSON.stringify(description)]
  );
  return res.rows[0];
};

export const updateProject = async (id, title, description) => {
  const res = await pool.query(
    'UPDATE projects SET title = $1, description = $2 WHERE id = $3 RETURNING *',
    [title, JSON.stringify(description), id]
  );
  return res.rows[0];
};

export const deleteProject = async (id) => {
  const res = await pool.query('DELETE FROM projects WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};
