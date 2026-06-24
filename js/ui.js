export const actualizarContador = (carrito) => {
  const contador = document.getElementById("cart-count");
  if (contador) {
    contador.textContent = carrito.length;
    contador.style.display = carrito.length > 0 ? "inline" : "none";
  }
};

export const mostrarMensaje = (texto) => {
  alert(texto);
};