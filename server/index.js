const express = require('express');
const app = express();

// GET /products
app.get('/products', (req, res) => {
  res.json({ success: true });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
