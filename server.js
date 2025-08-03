import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000; // You can change this if needed

app.use(cors());
app.use(express.json());

// Sample products data
const products = [
  { id: 1, name: 'Laptop', price: 500, description: 'Second-hand laptop in good condition' },
  { id: 2, name: 'Phone', price: 200, description: 'Used smartphone with charger' },
  { id: 3, name: 'Chair', price: 50, description: 'Wooden chair, slightly used' },
];

// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Root endpoint (optional)
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
