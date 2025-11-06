const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hệ thống quản lý chứng nhận hoạt động!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên http://localhost:${PORT}`);
});