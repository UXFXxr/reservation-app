require('dotenv').config(); // .envファイルを読み込む

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// MongoDB接続部分
mongoose
  .connect(
    `mongodb+srv://pvt-user:${process.env.DB_PASSWORD}@cluster0.0sicuif.mongodb.net/?appName=Cluster0`
  )
  .then(() => console.log('Connected!'))
  .catch((err) => console.error(err));

// GET /products
app.get('/products', (req, res) => {
  res.json({ success: true });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
