# Desafío entregable #2
## Clases con ECMAScript y ECMAScript avanzado:
### Consigna:
 - Realizar una clase ``"ProductManager"`` que gestione un conjunto de productos.
 - La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el el momento de generar su instancia.
 - cada productor que gestione debe contar con las propiedades:
    - title (nombre de producto).
    - description (descripción del producto).
    - price (precio).
    - thumbnail (ruta de imagen).
    - code (código identificador).
    - stock (número de piezas disponibles).

### Aspectos a incluir:
 - Debe contar con un método ``"addProduct"`` el cual agregará un producto al arreglo de productos inicial.
    - Validar que nos e repita el campo "code" y que todos los campos sean obligatorios.
    - Al agregarlos, debe crearse con un id automaticamente.

- Debe contar con un método ``"getProducts"`` el ual debe devolver el arreglo con todos los productos creados hasta ese momento.

- Debe contar con un método ``"getProductById"`` el cual debe buscar en el arreglo el producto que coincida con el id:
    - En caso de no coincidir ningun id, mostrar en la consola error "Not Found".

- Debe tener un método ``"updateProduct"``, el cual debe recibir el id del producto a actualizar así también como el campo a actualizar(puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo.
NO DEBE BORRARSE SU ID.

- Debe contar con un médoto ``"deleteProduct"`` el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.

## Pre-requisitos
  - node

## Inicialización:
1. Clonar el repositorio
  ````
    $ git clone https://github.com/Artbsc1992/entregable1.git
  ````
2. Acceder a la carpeta del projecto
````
  cd entregable1
````

3. Run node
````
 npm start
````