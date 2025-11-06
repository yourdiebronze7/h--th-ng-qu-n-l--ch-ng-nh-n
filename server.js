const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the Certification Management System!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});