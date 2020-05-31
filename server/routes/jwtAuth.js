const router = require('express').Router();
const pool = require('../db');

// Registering

router.get('/register', async (req, res) => {
  try {

    // destructure req.body

    const { name, email, password } = req.body;

    // check if user exists

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

    res.json(user.rows);

    // bcrypt the user password

    // enter the new user into the database

    // generate our jwt token

  } catch (err) {
    console.error(err.message);
    res.status(500)
  }
}
)
module.exports = router;