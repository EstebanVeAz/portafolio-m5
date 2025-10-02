Contexto del Proyecto

Desarrolla una aplicación básica de gestión de productos en un e-commerce utilizando JavaScript. En este proyecto, deberás aplicar conceptos fundamentales de la programación orientada a objetos (OOP), las nuevas funcionalidades de ES6+, el manejo de elementos del DOM, y la programación asincrónica para realizar operaciones como la consulta a una API externa que te brindará datos de productos, su visualización y manipulación.

Este proyecto no solo debe ser funcional, sino que debe ser un claro ejemplo de buenas prácticas en la programación, la implementación de características modernas de JavaScript y la integración con APIs externas.

Instrucciones

En función de tu proyecto personal previamente establecido, implementa las siguientes funcionalidades utilizando los conceptos de programación orientada a objetos y las características modernas de JavaScript.

Recuerda que este proyecto será parte de tu portafolio personal y debe reflejar tus habilidades técnicas en el desarrollo de aplicaciones web interactivas utilizando JavaScript.

Requerimientos Funcionales Mínimos Esperados

Utilizar los conceptos fundamentales de la programación orientada a objetos (OOP) acorde al lenguaje JavaScript
Crea una clase Producto que represente a los productos del e-commerce. Cada producto debe tener las propiedades:

id: Un identificador único para el producto.

nombre: El nombre del producto.

precio: El precio del producto.

categoria: La categoría del producto (por ejemplo, ropa, tecnología, etc.).

descripcion: Una breve descripción del producto.

Además, implementa un método que permita mostrar la información de un producto en formato legible para el usuario.

Utilizar las nuevas funcionalidades de la especificación ES6+ para la implementación de un algoritmo en JavaScript
Implementa la clase Producto utilizando las nuevas características de ES6+, como:

Clases: Usa la sintaxis de clases para definir el producto y sus métodos.

Funciones de flecha: Utiliza funciones de flecha para simplificar las funciones dentro de la clase.

Desestructuración: Utiliza la desestructuración para extraer información de un producto de forma eficiente.

Template literals: Usa template literals para crear cadenas de texto dinámicas al mostrar la información del producto.

Reconocer los elementos fundamentales del Domain Object Model (DOM) y los mecanismos para la manipulación de elementos en un documento HTML
Crea una interfaz en HTML que muestre una lista de productos y permite al usuario agregar productos al carrito de compras.
Utiliza los siguientes elementos:

Manipulación de elementos del DOM: Utiliza JavaScript para mostrar los productos de manera dinámica en la página, creando y actualizando elementos HTML.

Eventos: Asocia eventos como clics a botones de "Agregar al carrito", utilizando el manejo de eventos del DOM.

Utilizar elementos de programación asincrona para resolver un problema simple
Realiza una llamada asincrónica a una API externa (como la API de productos de un e-commerce) para obtener una lista de productos y mostrarlos en la página.
Para esto, deberás usar promesas o async/await para manejar la asincronía, de manera que los productos se carguen de manera eficiente y sin bloquear el hilo principal.

Utilizar el objeto XHR y la API fetch para el consumo de una API externa
Realiza una petición fetch para obtener los productos desde una API externa y luego procesa los datos.
La respuesta de la API debe ser un JSON con los productos. Usa los datos obtenidos para crear y mostrar los productos en la página, gestionando el error si la petición no se realiza correctamente.
Ejemplo de uso de fetch:

Solicitar los productos desde una API externa.

Mostrar la información de los productos de manera dinámica en la interfaz del usuario.

Implementar el manejo de errores en caso de que la API no esté disponible.

Producto Esperado

Tu proyecto debe contener los siguientes elementos:

Estructura HTML5: Página web con una lista de productos, un carrito de compras y la posibilidad de agregar productos al carrito.

CSS: Estilos básicos para una presentación limpia y funcional de los productos.

JavaScript con OOP: Implementación de la clase Producto y su funcionalidad de mostrar información.

Interactividad con el DOM: Mostrar productos dinámicamente y permitir al usuario interactuar con la interfaz (agregar productos al carrito, etc.).

Manejo de asincronía con fetch o XHR: Cargar los productos desde una API externa y mostrar los datos en la interfaz.

Manejo de errores: Implementación de un manejo básico de errores en caso de que la petición a la API falle.
