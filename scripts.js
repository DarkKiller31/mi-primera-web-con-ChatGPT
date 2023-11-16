// Función para agregar un producto al carrito
function agregarAlCarrito(id, nombre, precio) {
    // Crear un objeto de producto
    var producto = {
        id: id,
        nombre: nombre,
        precio: precio
    };

    // Agregar el producto al carrito
    carrito.push(producto);

    // Actualizar la interfaz de usuario
    actualizarCarrito();
}

// Función para actualizar la interfaz de usuario del carrito
function actualizarCarrito() {
    var listaCarrito = document.getElementById('lista-carrito');
    var totalElemento = document.getElementById('total');

    // Limpiar la lista de carrito
    listaCarrito.innerHTML = '';

    // Calcular el total
    var total = 0;

    // Recorrer el carrito y mostrar cada producto en el carrito
    for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i];

        // Crear un elemento de lista para el producto
        var li = document.createElement('li');
        li.textContent = producto.nombre + ' - $' + producto.precio.toFixed(2);

        // Agregar el producto a la lista
        listaCarrito.appendChild(li);

        // Sumar al total
        total += producto.precio;
    }

    // Mostrar el total
    totalElemento.textContent = 'Total: $' + total.toFixed(2);
}

// Inicializar el carrito
var carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(id, nombre, precio) {
    // Verificar si el producto ya está en el carrito
    var productoExistente = carrito.find(item => item.id === id);

    if (productoExistente) {
        // Si el producto ya está en el carrito, aumentar la cantidad
        productoExistente.cantidad++;
    } else {
        // Si el producto no está en el carrito, agregarlo
        var producto = {
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1
        };
        carrito.push(producto);
    }

    // Actualizar la interfaz de usuario
    actualizarCarrito();
}

// Función para quitar un producto del carrito
function quitarDelCarrito(id) {
    // Encontrar el índice del producto en el carrito
    var index = carrito.findIndex(item => item.id === id);

    if (index !== -1) {
        // Si el producto está en el carrito, reducir la cantidad o eliminarlo si la cantidad es 1
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
        } else {
            carrito.splice(index, 1);
        }

        // Actualizar la interfaz de usuario
        actualizarCarrito();
    }
}

// Función para actualizar la interfaz de usuario del carrito
function actualizarCarrito() {
    var listaCarrito = document.getElementById('lista-carrito');
    var totalElemento = document.getElementById('total');

    // Limpiar la lista de carrito
    listaCarrito.innerHTML = '';

    // Calcular el total
    var total = 0;

    // Recorrer el carrito y mostrar cada producto en el carrito
    for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i];

        // Crear un elemento de lista para el producto
        var li = document.createElement('li');
        li.innerHTML = `${producto.nombre} x ${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)}
                        <button onclick="quitarDelCarrito('${producto.id}')">Quitar</button>`;

        // Agregar el producto a la lista
        listaCarrito.appendChild(li);

        // Sumar al total
        total += producto.precio * producto.cantidad;
    }

    // Mostrar el total
    totalElemento.textContent = `Total: $${total.toFixed(2)}`;
}
// Resto del código ...

// Función para realizar la compra
function realizarCompra() {
    // Aquí puedes agregar la lógica para procesar la compra, por ejemplo, enviar los datos al servidor.
    alert('¡Gracias por tu compra!');
    // Limpia el carrito después de la compra
    carrito = [];
    // Actualiza la interfaz de usuario
    actualizarCarrito();
}

// Resto del código ...

