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

    //se llamará "getProducts" para obtener el array de productos con el producto agregado
    const productsList2 = await productManager.getProducts();
    console.log(productsList2)

    //se llamará "getProductById" para obtener el producto con id 2 arrojando un error
    const productById = await productManager.getProductById(2);
    console.log(productById);

    //se llamará "updateProduct" para actualizar el producto con id 1
    const productUpdate = { title: "producto prueba actualizado", description: "Este es un producto prueba actualizado", code: "abc123", price: 200, thumbnail: "sin imagen", stock: 25}
    await productManager.updateProduct(1, productUpdate);
    const productsList3 = await productManager.getProducts();
    console.log(productsList3)

    //se llamará "deleteProduct" para eliminar el producto con id 1
    await productManager.deleteProduct(1);
    const productsList4 = await productManager.getProducts();
    console.log(productsList4)
  } catch (error) {
    console.log(error)
  }
}

manager();

