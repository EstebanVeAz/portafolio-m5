 // URL de la API de productos
 const API_URL = 'https://fakestoreapi.com/products';
// Clase Producto
 class Producto {
    constructor (id,nombre,precio,categoria,descripcion,imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    mostrarInfo(){
        return `ID: ${this.id} - Nombre: ${this.nombre} - Precio: $${this.precio} - Categoria: ${this.categoria} - Descripcion: ${this.descripcion}`;
    }
} 
// Función para obtener los productos desde la API
async function obtenerProductos() {
  try{
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error ('Error en la solicitud');
    }
    const data = await response.json();
    // Mapear los datos a instancias de la clase Producto
   const productos = data.map (item => new Producto(item.id, item.title, item.price, item.category, item.description, item.image));
   return productos;
  } catch (error){
    console.error('Error al obtener los productos:', error);
    return [];
  }
}

// Referencia al contenedor de productos en el DOM
const containerProductos = document.getElementById('container-productos');

// Función para mostrar los productos en el DOM
function mostrarProductos(productos) {
  containerProductos.innerHTML = '';

  containerProductos.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'g-4');

  productos.forEach((producto) => {
    const card = document.createElement('div');
    card.classList.add('col');

    card.innerHTML = `
      <div class="card h-100">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height:200px; object-fit:contain;">
        <div class="card-body d-flex flex-column p-2">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text" style="
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            font-size: 0.9rem;
          ">${producto.descripcion}</p>
          <p class="card-text mt-auto"><strong>$${producto.precio}</strong></p>
          <button class="btn btn-primary mt-2" onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
        </div>
      </div>
    `;
    containerProductos.appendChild(card);
  });
}

// Función para inicializar la aplicación
async function Inicializar() {
  const productos = await obtenerProductos();
  productos.forEach(producto => console.log(producto.mostrarInfo()));
  mostrarProductos(productos);
}
Inicializar();