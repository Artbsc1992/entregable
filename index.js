import ProductManager from './ProductManager.js';
import * as path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const app = express();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathDB = path.join(`${__dirname}/db.json`);

const productManager = new ProductManager(pathDB);

//server return all products & limit

app.get('/products', async (req, res) => {
  try {
    const products = await productManager.getProducts();
    const limit = req.query.limit;
    if (products.length === 0) {
      res.json({ error: 'no hay productos cargados' });
    } else if(limit){
      res.json(products.slice(0, limit));
    } else {
      res.json(products);
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});

//sever return product by id
app.get('/products/:id', async (req, res) => {
  try {
    const idToInt = parseInt(req.params.id);
    const product = await productManager.getProductById(idToInt);
    if (!product) {
      res.json({ error: 'producto no existe' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});