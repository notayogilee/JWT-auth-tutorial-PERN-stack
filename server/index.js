const express = require('express');
const app = express();
const cors = require('cors');

// Middleware

app.use(express.json());  //req/body
app.use(cors());

// Routes

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});