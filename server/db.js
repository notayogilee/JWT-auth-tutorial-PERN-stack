const { Pool } = require('pg');
require('dotenv').config();

// const pool = new Pool({
//   host: 'localhost',
//   user: 'development',
//   password: 'development',
//   port: 5432,
//   database: 'jwttutorial'
// });


const pool = new Pool({
  host: `${process.env.DB_HOST}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  port: process.env.DB_PORT,
  database: `${process.env.DATABASE}`
});

module.exports = pool;