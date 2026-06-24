import { obtenerCarrito, vaciarCarritoStorage } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

const renderizarCarrito = () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  const contenedor = document.getElementById("contenedor-carrito");
  const divAcciones = document.getElementById("acciones-carrito");
  const resumen = document.getElementById("resumen-carrito");

  contenedor.innerHTML = "";
  divAcciones.innerHTML = "";
  resumen.innerHTML = "";

  if (!carrito.length) {
    const mensaje = document.createElement("p");
    mensaje.classList.add("mensaje-carrito-vacio");
    mensaje.textContent = "🛍️ Tu carrito está vacío";
    contenedor.appendChild(mensaje);
    return;
  }

  carrito.forEach((producto, index) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("cart-card");

    const img = document.createElement("img");
    img.src = `../${producto.img}`;
    img.alt = producto.nombre;

    const info = document.createElement("div");
    info.classList.add("cart-card-info");

    const titulo = document.createElement("h3");
    titulo.classList.add("producto-nombre");
    titulo.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.classList.add("producto-precio");
    precio.textContent = `$${producto.precio.toLocaleString()}`;

    const acciones = document.createElement("div");
    acciones.classList.add("cart-card-actions");

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn-eliminar-carrito");
    btnEliminar.innerHTML = '<i class="fa-solid fa-trash-can"></i> Eliminar';

    btnEliminar.addEventListener("click", () => {
      eliminarProducto(index);
      renderizarCarrito();
    });

    acciones.appendChild(btnEliminar);
    info.appendChild(titulo);
    info.appendChild(precio);
    info.appendChild(acciones);
    tarjeta.appendChild(img);
    tarjeta.appendChild(info);

    contenedor.appendChild(tarjeta);
  });

  // Botón vaciar carrito - 
  const btnVaciar = document.createElement("button");
  btnVaciar.classList.add("btn-vaciar-carrito");
  btnVaciar.innerHTML = '<i class="fa-solid fa-trash-can"></i> Vaciar carrito';

  btnVaciar.addEventListener("click", () => {
    vaciarCarrito();
    renderizarCarrito();
  });

  divAcciones.appendChild(btnVaciar);

  // Resumen
  const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
  resumen.innerHTML = `
    <h3> Resumen de compra</h3>
    <p class="total-productos">Total de productos: <strong>${carrito.length}</strong></p>
    <hr>
    <p class="total-pagar">Total: $${total.toLocaleString()}</p>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
});