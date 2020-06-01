const express = require('express');
const app = express();
const cors = require('cors');

// Middleware

app.use(express.json());  //req/body
app.use(cors());

// Routes

// Register and login routes

app.use('/auth', require('./routes/jwtAuth'));

app.listen(1234, () => {
  console.log(`Server is running on port 1234`);
});