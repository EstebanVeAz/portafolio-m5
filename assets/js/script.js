 const API_URL = 'https://fakestoreapi.com/products';

 class Producto {
    constructor (id,nombre,precio,categoria,descripcion){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }
    mostrarInfo(){
        return `ID: ${this.id} - Nombre: ${this.nombre} - Precio: $${this.precio} - Categoria: ${this.categoria} - Descripcion: ${this.descripcion}`;
    }
} 

async function obtenerProductos() {
  try{
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error ('Error en la solicitud');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const containerProductos = document.getElementById('container-productos');

function mostrarProductos(productos) {
  containerProductos.innerHTML = '';

  containerProductos.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'g-4');

  productos.forEach((producto) => {
    const card = document.createElement('div');
    card.classList.add('col');

    card.innerHTML = `
      <div class="card h-100">
        <img src="${producto.image}" class="card-img-top" alt="${producto.title}" style="height:200px; object-fit:contain;">
        <div class="card-body d-flex flex-column p-2">
          <h5 class="card-title">${producto.title}</h5>
          <p class="card-text" style="
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            font-size: 0.9rem;
          ">${producto.description}</p>
          <p class="card-text mt-auto"><strong>$${producto.price}</strong></p>
          <button class="btn btn-primary mt-2" onclick="agregarAlCarrito(${producto.id}, '${producto.title}', ${producto.price})">Agregar al carrito</button>
        </div>
      </div>
    `;
    containerProductos.appendChild(card);
  });
}

async function Inicializar() {
  const productos = await obtenerProductos();
  mostrarProductos(productos);
}

Inicializar();