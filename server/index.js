require('dotenv').config(); // .envファイルを読み込む

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');

const app = express();

// MongoDB接続
mongoose
  .connect(config.DB_URI)
  .then(async () => {
    console.log('MongoDB Connected!');
    const fakeDb = new FakeDb();
    await fakeDb.secDb();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

// GET /products
app.get('/products', (req, res) => {
  res.json({ success: true });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
