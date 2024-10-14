document.getElementById('compras-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Validaciones básicas
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tarjeta = document.getElementById('tarjeta').value;

    if (nombre && email && tarjeta) {
        // Mostrar mensaje de éxito
        document.getElementById('mensaje-exito').classList.remove('d-none');

        // Opcional: desactivar el botón de confirmar compra después del éxito
        document.querySelector('button[type="submit"]').disabled = true;
    }
    
});

// Redirigir al hacer clic en la "X"
document.getElementById('close-button').addEventListener('click', function() {
    window.location.href = 'index.html'; 
});

