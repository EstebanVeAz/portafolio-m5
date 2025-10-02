 // URL de la API de productos
 const API_URL = 'https://fakestoreapi.com/products';
// Array para almacenar los productos en el carrito
  let carrito = [];
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
    // Mapear los datos a instancias de la clase Producto. Uso de Desestructuración
   const productos = data.map(({id, title, price, category, description, image}) => 
    new Producto(id, title, price, category, description, image)
);
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
          <p style="flex-grow:1;">Category: <strong>${producto.categoria}</strong></p> 
          <p class="card-text mt-auto"><strong>$${producto.precio}</strong></p>
          <button class="btn btn-primary mt-2" onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
        </div>
      </div>
    `;
    containerProductos.appendChild(card);
  });
}
//funcion para agregar productos al carrito
async function agregarAlCarrito(id,nombre,precio){
  const productosEnCarrito = carrito.find(p => p.id === id);
  if (productosEnCarrito){
    productosEnCarrito.cantidad += 1;
  }
  else {
    carrito.push({id, nombre, precio, cantidad: 1});
  }
  actualizarCarrito();
}
// Función para actualizar el carrito en el DOM
function actualizarCarrito(){
  //manipulación del DOM
  const contador = document.getElementById('contador-carrito');
  const lista = document.getElementById('lista-carrito');
  const total = document.getElementById('total-carrito');
  const carritoVacio = document.getElementById('carrito-vacio');
  const carritoContenido = document.getElementById('carrito-contenido');
  // Actualizar el contador del carrito
  const totalProductos = carrito.reduce((sum,p) => sum + p.cantidad,0);
  contador.textContent = totalProductos;

  if (carrito.length === 0){
    carritoVacio.style.display = 'block';
    carritoContenido.style.display = 'none';
  }else {
    carritoVacio.style.display = 'none';
    carritoContenido.style.display = 'block';
  }
  lista.innerHTML = ''; 
  // Mostrar los productos en el carrito
  let subtotal = 0;
    carrito.forEach(p => {
      subtotal += p.precio * p.cantidad;
      const li = document.createElement('li');
      li.classList.add('d-flex', 'justify-content-between', 'mb-2');
      li.innerHTML = `
        <span>${p.nombre} x ${p.cantidad}</span>
        <hr>
        <span>$${(p.precio * p.cantidad).toFixed(2)}</span>   
      `;
      lista.appendChild(li);
    });

    total.textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('final-envio').textContent = `$${subtotal.toFixed(2)}`;
  }

  //funcion para finalizar compra
  function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío. Agrega productos antes de finalizar la compra.");
    return;
  }

  const total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);

  // Actualiza el contenido
  const modalBody = document.getElementById('modal-body-compra');
  modalBody.innerHTML = `
    <p>¡Gracias por tu compra!</p>
    <p>Total: <strong>$${total.toFixed(2)}</strong></p>
  `;

  carrito = [];
  actualizarCarrito();
  const compraModal = new bootstrap.Modal(document.getElementById('compraModal'));
  compraModal.show();
}

// Función para inicializar la aplicación
async function Inicializar() {
  const productos = await obtenerProductos();
  productos.forEach(producto => console.log(producto.mostrarInfo()));
  mostrarProductos(productos);
}
Inicializar();