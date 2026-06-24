// Archivo para futuras funcionalidades de contacto
// Archivo para futuras funcionalidades de contacto
console.log("Página de contacto cargada");

// Importar el contador para actualizarlo en todas las páginas
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
});