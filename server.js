const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection setup
const pool = new Pool({
  user: 'postgres',               // Replace with your PostgreSQL username
  host: '35.224.223.27',             // Replace with your instance's public IP or private IP if using VPN/VPC
  database: 'postgres',           // Replace with your database name
  password: 'FixItLanka',           // Replace with your PostgreSQL password
  port: 5432,                         // Default PostgreSQL port
});

// Sample route to fetch data
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
