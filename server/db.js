import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Bağlantı test fonksiyonu
async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('connected time =>', res.rows[0].now);
  } catch (err) {
    console.error('DB bağlantı hatası:', err);
  }
  console.log('DB =>', process.env.DATABASE_URL);
}

testConnection();

export default pool;
