class Product {
    constructor(
      titulo,
      descripcion,
      precio,
      imagen,
      codigo_identificador,
      piezas_disponibles
    ) {
      this.id = null;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.precio = precio;
      this.imagen = imagen;
      this.codigo_identificador = codigo_identificador;
      this.piezas_disponibles = piezas_disponibles;
    }
  }
  
  class ProductManager {
    constructor() {
      this.products = [];
      this.auto_increment_id = 1;
    }
  
    add_product(
      titulo,
      descripcion,
      precio,
      imagen,
      codigo_identificador,
      piezas_disponibles
    ) {
      // Validar que no se repita el campo 'codigo_identificador'
      for (let product of this.products) {
        if (product.codigo_identificador === codigo_identificador) {
          console.log(
            "Error: Ya existe un producto con el mismo código identificador"
          );
          return;
        }
      }
  
      // Validar que todos los campos sean obligatorios
      if (
        !titulo ||
        !descripcion ||
        !precio ||
        !imagen ||
        !codigo_identificador ||
        !piezas_disponibles
      ) {
        console.log("Error: Todos los campos son obligatorios");
        return;
      }
  
      // Crear el nuevo producto con id autoincrementable
      let new_product = new Product(
        titulo,
        descripcion,
        precio,
        imagen,
        codigo_identificador,
        piezas_disponibles
      );
      new_product.id = this.auto_increment_id;
      this.auto_increment_id += 1;
  
      // Añadir el nuevo producto al arreglo de productos
      this.products.push(new_product);
    }
  
    get_products() {
      return this.products;
    }
  
    get_product_by_id(product_id) {
      for (let product of this.products) {
        if (product.id === product_id) {
          return product;
        }
      }
      throw new Error("Producto no encontrado");
    }
  }
  
  // Creamos una instancia de ProductManager
  const productManager = new ProductManager();
  
  // Agregamos un producto
  productManager.add_product(
    "Producto 1",
    "Descripción del producto 1",
    100,
    "ruta/imagen1.jpg",
    "code1",
    10
  );
  // Agregamos otro producto
  productManager.add_product(
    "Producto 2",
    "Descripción del producto 2",
    200,
    "ruta/imagen2.jpg",
    "code2",
    20
  );
  
  //Agregamos producto con mismo codigo
  
  productManager.add_product(
    "Producto 2",
    "Descripción del producto 2",
    200,
    "ruta/imagen2.jpg",
    "code2",
    20
  );
  
  // Obtenemos todos los productos
  const products = productManager.get_products();
  console.log(products);
  
  // Obtenemos un producto por su id
  const product = productManager.get_product_by_id(1);
  console.log(product);
  
  // Intentamos obeter un producto con un ID que no exista
  const product2 = productManager.get_product_by_id(3);
  console.log(product2);
  