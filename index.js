import ProductManager from './ProductManager.js';
import * as path from 'path';
import { fileURLToPath } from 'url';


const manager = async () => {

  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  try {
    const pathDB = path.join(`${__dirname}/db.json`);

    // se creará una instancia de la clase ProductManager
    const productManager = new ProductManager(pathDB);

    //se llamará "getProducts" para obtener el array de productos vacio
    const productsList = await productManager.getProducts();
    console.log(productsList)

    //se llamará "addProduct" para agregar un producto
    const product1 = { title: "producto prueba", description: "Este es un producto prueba", code: "abc123", price: 200, thumbnail: "sin imagen", stock: 25}
    await productManager.addProduct(product1);
  } catch (error) {
    console.log(error)
  }
}

manager();
// //se llamará "addProduct" para agregar un producto
// const product1 = { title: "producto prueba", description: "Este es un producto prueba", code: "abc123", price: 200, thumbnail: "sin imagen", stock: 25}
// productManager.addProduct(product1);

// //se llamará "getProducts" para obtener el array de productos con el producto agregado
// console.log(productManager.getProducts());

// //se llamará "addProduct" para agregar un producto con el mismo código arrojando un error
// const product2 = { title: "producto prueba", description: "Este es un producto prueba", code: "abc123", price: 200, thumbnail: "sin imagen", stock: 25}
// productManager.addProduct(product2);

// //se llamará "getProductById" para obtener el producto con id 1
// console.log(productManager.getProductById(1));
// console.log(productManager.getProductById(2)); // arrojara un error al no encontrar el producto
