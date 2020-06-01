const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'development',
  password: 'development',
  port: 5432,
  database: 'jwttutorial'
});

// const pool = new Pool({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   port: process.env.PORT,
//   database: process.env.DATABASE
// });

module.exports = pool;