const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let orders = [];

app.post('/api/orders', (req, res) => {
  const { cart } = req.body;
  const orderNumber = Math.floor(Math.random() * 10000);
  const estimatedTime = Math.floor(Math.random() * 20) + 10;
  
  const newOrder = { orderNumber, cart, estimatedTime };
  orders.push(newOrder);
  
  res.json({ orderNumber, estimatedTime });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
