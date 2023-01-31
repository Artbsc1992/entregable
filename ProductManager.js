import * as fs from 'fs/promises';

export default class ProductManager {
  static id = 1;
  constructor(path) {
    this.path = path;
  }

  async addProduct(product) {
    try {
    const { title, description, code, price, thumbnail, stock } = product;
    const chekedProduct = await this.#checkparams({ title, description, code, price, thumbnail, stock });
    const listOfProducts = await this.getProducts();
    if (chekedProduct) {
      const newProduct = { id: ProductManager.id++, ...product };
      listOfProducts.push(newProduct);
      fs.writeFile(this.path, JSON.stringify(listOfProducts), 'utf-8');
      console.log('Product added')
    }
    } catch (error) {
      console.log(error);
    }

  }

  async getProducts() {
    try {
      const existFile = await this.#checkDB();
      if(existFile){
        console.log('Reading file...')
        const data = await fs.readFile(this.path, 'utf-8');
        return JSON.parse(data);
      } else {
        console.log('Writing file...')
        await fs.writeFile(this.path, JSON.stringify([]), 'utf-8');
      }
      console.log('Reading file...')
      const data = await fs.readFile(this.path, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getProductById(id) {
    const errorLocal = new Error("Not found");
    return this.products.find(product => product.id === id? product : console.log(errorLocal));
  }


  

  async #checkDB() {
    try {
      await fs.access(this.path);
      return true;
    } catch (error) {
      return false;
    }
  }

  async #checkparams({ title, description, code, price, thumbnail, stock }) {
    const err = new Error("Product already exists")
    const errorLocal = new Error("Invalid data");
    const productList = await this.getProducts();
    if (!title || !description || !code || !price || !thumbnail || !stock) {
      console.log(errorLocal);
      return false;
    } else if (productList.find(product => product.code === code)) {
      console.log(err);
      return false;
    }
    return true;
  }
}

