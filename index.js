class ProductManager {
  static id = 1;
  constructor() {
    this.products = [];
  }

  addProduct({ title, description, code, price, thumbnail, stock }) {
    if (this.#checkparams({ title, description, code, price, thumbnail, stock })) {
      this.products.push({ id: ProductManager.id++, title, description, code, price, thumbnail, stock });
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const errorLocal = new Error("Not found");
    return this.products.find(product => product.id === id? product : console.log(errorLocal));
  }


  #checkparams({ title, description, code, price, thumbnail, stock }) {
    const err = new Error("Faltan datos");
    const errorLocal = new Error("El producto ya existe");
    if (!title || !description || !code || !price || !thumbnail || !stock) {
      console.log(err);
    } else if (this.products.find((product) => product.code === code)) {
      console.log(errorLocal);
    } else {
      return true;
    }
  }

}

// se creará una instancia de la clase ProductManager
const productManager = new ProductManager();

//se llamará "getProducts" para obtener el array de productos vacio
console.log(productManager.getProducts());

//se llamará "addProduct" para agregar un producto
const product1 = { title: "producto prueba", description: "Este es un producto prueba", code: "abc123", price: 200, thumbnail: "sin imagen", stock: 25}
productManager.addProduct(product1);

//se llamará "getProducts" para obtener el array de productos con el producto agregado
console.log(productManager.getProducts());

//se llamará "addProduct" para agregar un producto con el mismo código arrojando un error
const product2 = { title: "producto prueba", description: "Este es un producto prueba", code: "abc123", price: 200, thumbnail: "sin imagen", stock: 25}
productManager.addProduct(product2);

//se llamará "getProductById" para obtener el producto con id 1
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2)); // arrojara un error al no encontrar el producto
