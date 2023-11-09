// creado de los productos
let productos = [
    { id: 1, nombre: "QUESO", descripcion: "salsa y queso.",precio: 1500},
    { id: 2, nombre: "CHAMPIÑON", descripcion: "salsa, queso y champiñones.",precio: 1800},
    { id: 3, nombre: "VEGETARIANA", descripcion: "salsa, queso, champiñón, aceitunas, cebolla, piña, albahaca y maíz.",precio: 3000},
    { id: 4, nombre: "CEBOLLA", descripcion: "salsa, queso y cebolla.",precio: 1500},
    { id: 5, nombre: "ALBAHACA", descripcion: "salsa, queso y albahaca.",precio: 1800},
    { id: 6, nombre: "LOBO DE MAR", descripcion: "salsa, queso, aceitunas y lagostinos.",precio: 2500},
];

function agregarCarrito(producto) {
    //verifico si hay carrito en el storage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    //agrego el producto al carrito
    carrito.push(producto);
    //guardo el carrito en el storage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    //agrego una alerta para verificar que los cambios se han realizado
    alert(`Pizza de ${producto.nombre} ha sido agregada al carrito.`);

};

//subo los productos al DOM para poder visulalizarlos
productos.forEach((producto) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Nombre: ${producto.nombre}</h2>
    <p>Descripcion: ${producto.descripcion}</p>
    <p>Precio: $${producto.precio}</p>
    <button id="boton${producto.id}">Agregar</button>
    `;
    div.className = "tarjetas";


    let contenedor = document.getElementById("contenedor");
    contenedor.append(div);

    // document.body.append(div);

    let boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
        agregarCarrito(producto);
    });
});

//creo un boton para poder eliminar el pedido entero
let eliminarPedido = document.getElementById("botonEliminar");
eliminarPedido.addEventListener("click", () => {
    alert("El pedido ha sido eliminado."); //genero la alerta
    localStorage.clear(); //borro el storage
    location. reload(); //recargo automaticamente la pagina
});
