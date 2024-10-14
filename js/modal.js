
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#f1f1f1";
    } else {
        header.style.backgroundColor = "#ffffff";
    }
});
// Escucha los clics en los botones de "Ver detalles"
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.btn-primary');
    var imagen = document.getElementById('detalle-imagen');
    var detallesProducto = document.getElementById('detalles-producto');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Extrae la información de los atributos data-*
            var producto = button.getAttribute('data-producto');
            var antes = button.getAttribute('data-antes');
            var ahora = button.getAttribute('data-ahora');
            var imagenSrc = button.getAttribute('data-imagen');
            var contenido = button.getAttribute('data-contenido');

            // Actualiza los detalles del producto
            document.getElementById('detalle-producto').textContent = producto;
            document.getElementById('detalle-antes').textContent = antes;
            document.getElementById('detalle-ahora').textContent = ahora;
            imagen.src = imagenSrc;
            document.getElementById('detalle-descripcion').textContent = contenido;

            // Mostrar la sección de detalles del producto
            detallesProducto.style.display = 'block';
        });
    });
});


// Obtener elementos del DOM
const comprarBtn = document.getElementById('comprar-ahora-btn');
const modal = document.getElementById('modal-tienda');
const cerrarModal = document.getElementById('cerrar-modal');
const confirmarCompraBtn = document.getElementById('confirmar-compra-btn');

// Mostrar modal cuando se haga clic en "Comprar ahora"
comprarBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Cerrar modal cuando se haga clic en la 'X'
cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal cuando se haga clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Redirigir a la tienda cuando se confirme la compra
confirmarCompraBtn.addEventListener('click', () => {
    window.location.href = "compras.html"; 
});
