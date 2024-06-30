import express from 'express';

const app = express();
const PORT = 3000;

// Sample product data
const products = [
  { id: 1, name: 'Laptop', category: 'electronics', price: 1000 },
  { id: 2, name: 'Phone', category: 'electronics', price: 500 },
  { id: 3, name: 'Shoes', category: 'fashion', price: 100 },
  { id: 4, name: 'T-shirt', category: 'fashion', price: 20 },
  { id: 5, name: 'Watch', category: 'accessories', price: 200 },
];

// Define a route that handles query parameters
app.get('/products', (req, res) => {
  const query = req.query.query?.toLowerCase();
  const category = req.query.category?.toLowerCase();
  const sort = req.query.sort;

  let filteredProducts = products;

  if (query) {
    filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(query));
  }

  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category.toLocaleLowerCase() === category);
  }

  if (sort === 'price') {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  res.json(filteredProducts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
